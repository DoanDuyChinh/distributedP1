<!-- src/components/Profile.vue -->
<template>
    <div class="profile-container">
      <div class="profile-card">
        <div class="profile-header">
            <img class="avatar" src="../../public/avatar_user.png" alt="Avatar" />
          <!-- <h2>{{ user.username }}</h2>
          <p>{{ user.email }}</p> -->
        </div>
  
        <div class="profile-details">
          <div class="detail"><strong>Username:</strong> {{ user.username }}</div>
          <div class="detail"><strong>Email:</strong> {{ user.email }}</div>
          <div class="detail"><strong>Phone:</strong> {{ user.phone }}</div>
          <div class="detail"><strong>Gender:</strong> {{ user.gender }}</div>
          <!-- <div class="detail">
            <strong>Password:</strong> <span>********</span>
            <button class="change-pass-btn" @click="togglePasswordChange">
              Change Password
            </button>
          </div> -->
        </div>
  
        <button class="edit-btn" @click="toggleEdit">
          {{ isEditing ? 'Save Changes' : 'Edit Profile' }}
        </button>
  
        <div v-if="isEditing" class="edit-form">
          <label>Username</label>
          <input v-model="user.username" type="text" />
  
          <label>Email</label>
          <input v-model="user.email" type="email" />
  
          <label>Phone</label>
          <input v-model="user.phone" type="text" />
  
          <label>Gender</label>
          <select v-model="user.gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
  
          <!-- <label>Change Avatar (URL)</label>       -->
          <!-- <input v-model="user.avatar" type="text" placeholder="Enter image URL" /> -->
  
          <div v-if="isChangingPassword">
            <label>New Password</label>
            <input v-model="user.newPassword" type="password" placeholder="Enter new password" />
          </div>
        </div>
  
        <p v-if="successMessage" class="success-msg">{{ successMessage }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'
  import { ref, onMounted } from 'vue'
  const token = localStorage.getItem('token')
  const getProfile = async () => {
    try {
      const response = await axios.get('http://10.24.14.237:8080/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      // Gán dữ liệu API trả về vào `user`
      user.value = {
        username: response.data.username || '',
        email: response.data.email || '',
        phone: response.data.phone || '',
        gender: response.data.gender || ''
      }
    } catch (error) {
      console.error("Error fetching profile:", error)
    }
  }

  const handleUpdateProfile = async () => {
    const response = await axios.patch('http://10.24.14.237:8080/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    },{
      username: user.value.username,
      email: user.value.email,
      phone: user.value.phone,
      gender: user.gender
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error("Error updating profile:", error)
    })
  }
  
  const user = ref({
    username: '',
    email: '',
    phone: '',
    gender: '',
  })
  
  const isEditing = ref(false)
  const isChangingPassword = ref(false)
  const successMessage = ref('')
  
  // Load user data từ localStorage (giả lập API call)
  onMounted(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser) {
      user.value = { ...storedUser, newPassword: '' }
    }
  })
  
  const toggleEdit = () => {
    if (isEditing.value) {
      if (isChangingPassword.value && user.value.newPassword) {
        user.value.password = user.value.newPassword
      }
  
    //   delete user.value.newPassword
    //   localStorage.setItem('user', JSON.stringify(user.value))
      successMessage.value = 'Profile updated successfully!'
      setTimeout(() => (successMessage.value = ''), 3000)
    }
    isEditing.value = !isEditing.value
  }
  
  // Bật/tắt thay đổi mật khẩu
  const togglePasswordChange = () => {
    isChangingPassword.value = !isChangingPassword.value
  }
  </script>
  
  <style scoped>
  .profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f4f7fa;
  }
  
  .profile-card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;
  }
  
  .profile-header {
    margin-bottom: 20px;
  }
  
  .avatar {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 3px solid #007bff;
    object-fit: cover;
  }
  
  h2 {
    margin: 10px 0;
    font-size: 22px;
    color: #333;
  }
  
  p {
    color: #666;
  }
  
  .profile-details {
    text-align: left;
    margin: 20px 0;
  }
  
  .detail {
    font-size: 16px;
    margin: 10px 0;
  }
  
  strong {
    color: #007bff;
  }
  
  .edit-btn,
  .change-pass-btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 10px;
  }
  
  .edit-btn:hover {
    background-color: #0056b3;
  }
  
  .change-pass-btn {
    background-color: #28a745;
  }
  
  .change-pass-btn:hover {
    background-color: #218838;
  }
  
  .edit-form {
    margin-top: 20px;
    text-align: left;
  }
  
  .edit-form label {
    display: block;
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
  }
  
  .edit-form input,
  .edit-form select {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  
  .success-msg {
    color: #28a745;
    margin-top: 10px;
    font-size: 14px;
  }
  </style>
  