"use client";
import React, { useState } from "react";
import './layout.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    task: ""
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleAddTask = (e) => {
    const fieldTask = e.target.name; // Corrected from e.target.task
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldTask]: fieldValue
    }));
  }

  const submitForm = (e) => {
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setFormData({
        task: ""
      });
      setFormSuccess(true);
      setFormSuccessMessage(data.submission_text);
    });
  }

  return (
    <div className="purple-container">
      <div className="container">
          <h1>
            To - Do - List App
          </h1>
        
        {formSuccess ? (
          <div>{formSuccessMessage}</div>
        ) : (
          <form method="POST" action="/" onSubmit={submitForm}>
            <input
              type="text"
              name="task"
              placeholder="Add your task..."
              value={formData.task} 
              onChange={handleAddTask}
            />
            <button type="submit">ADD</button>
          </form>
        )}
      </div>
    </div>
  );
  
}
