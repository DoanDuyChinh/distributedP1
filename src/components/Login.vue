<!-- src/components/Login.vue -->
<template>
    <div class="login-container">
      <div class="login-form">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="username">Username</label>
            <input v-model="username" type="text" id="username" placeholder="Enter your username" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" class="login-btn">Login</button>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
        <p class="redirect-text mt-3">
        Don't have an account? <router-link to="/signup" class="redirect-link">Sign Up</router-link>
      </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router' 
  const username = ref('')
  const password = ref('')
  const errorMessage = ref('')
  const router = useRouter()
  
  const handleLogin = () => {
    router.push('/profile')
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
  
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .login-form {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 350px;
    text-align: center;
  }
  
  .login-form h2 {
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
  
  .login-btn {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .login-btn:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: #d9534f;
    font-size: 14px;
    margin-top: 10px;
  }
  </style>
  