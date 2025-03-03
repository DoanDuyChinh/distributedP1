<!-- src/components/Signup.vue -->
<template>
    <div class="signup-container">
      <div class="signup-form">
        <h2>Sign Up</h2>
        <form @submit.prevent="handleSignup">
          <div class="input-group">
            <label for="username">Username</label>
            <input v-model="username" type="text" id="username" placeholder="Enter your username" required />
          </div>
          <div class="input-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div class="input-group">
            <label for="password">Phone</label>
            <input v-model="phone" type="text" placeholder="Enter your password" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div class="input-group">
          <label for="gender">Gender</label>
          <select v-model="gender" id="gender" required>
            <option value="" disabled>Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
          <!-- <div class="input-group">
            <label for="confirmPassword">Confirm Password</label>
            <input v-model="confirmPassword" type="password" id="confirmPassword" placeholder="Confirm your password" required />
          </div> -->
          <button type="submit" class="signup-btn">Sign Up</button>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
        <p class="redirect-text mt-3">Already have an account? <router-link to="/login" class="redirect-link">Login</router-link></p>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref } from 'vue'
  import { toast } from 'vue3-toastify';
  const username = ref('')
  const email = ref('')
  const password = ref('')
  // const confirmPassword = ref('')
  const phone = ref('')
  const gender = ref('')
  const errorMessage = ref('')
  
  const handleSignup = () => {
    console.log("dsdghs");
    
   
      console.log(username.value, email.value, password.value, phone.value);
      
      const resdata = {
        "name": username.value,
        "email": email.value,
        "password": password.value,
        "phone": phone.value, 
        "gender": gender.value,
      }
      axios.post('http://10.24.14.237:8080/register', resdata) 
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        }); 
  }
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f7fa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  } */
  
  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .signup-form {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 350px;
    text-align: center;
  }
  
  .signup-form h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }
  
  .input-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  .input-group label {
    display: block;
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease;
  }
  
  .input-group input:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .signup-btn {
    width: 100%;
    padding: 12px;
    background-color: #28a745;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .signup-btn:hover {
    background-color: #218838;
  }
  
  .error {
    color: #d9534f;
    font-size: 14px;
    margin-top: 10px;
  }

  .input-group select {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}
  </style>
  