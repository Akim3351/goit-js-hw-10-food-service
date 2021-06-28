const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  
  const themeSwitch = document.querySelector('#theme-switch-toggle');
  
  themeSwitch.addEventListener('change', changeTheme);
  
  function changeTheme(evt) {
      const checked = evt.currentTarget.checked
      if (checked) {
          setDarkTheme();
      }
  
      if (!checked) {
          setLightTheme()
      }
  }
  
  getCurrentTheme()
  
  function getCurrentTheme() {
      const currentTheme = localStorage.getItem('theme');
  
      if (currentTheme === Theme.LIGHT || currentTheme === null) {
          setLightTheme()
      }
  
      if (currentTheme === Theme.DARK) {
          setDarkTheme()
      }
  }
  
  
  function setDarkTheme() {
        document.body.classList.add(Theme.DARK);
          document.body.classList.remove(Theme.LIGHT);
          localStorage.setItem('theme', Theme.DARK);
          themeSwitch.checked = true
  }
  
  function setLightTheme() {
      
      document.body.classList.add(Theme.LIGHT);
      document.body.classList.remove(Theme.DARK);
      localStorage.setItem('theme', Theme.LIGHT);
      themeSwitch.checked = false
  }