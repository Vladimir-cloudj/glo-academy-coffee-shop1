<template>
  <div class="spinner-overlay">
    <div class="spinner">
      <div class="spinner-circle"></div>
      <div class="spinner-text">Загрузка...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoaingSpinner'
}
</script>

<style scoped>
.spinner-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
}

.spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.spinner-circle {
  width: 60px;
  height: 60px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #6f4e37;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner-text {
  font-size: 18px;
  color: #6f4e37;
  font-style: italic;
  font-family: serif;
}
</style>