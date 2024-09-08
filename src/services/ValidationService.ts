export class ValidationService {
    validate(data: any) {
      let errors = [];
  
      if (!data.username || data.username.length < 3) {
        errors.push({ field: 'username', message: 'Username must be at least 3 characters long' });
      }
  
      if (!data.password || data.password.length < 6) {
        errors.push({ field: 'password', message: 'Password must be at least 6 characters long' });
      }
  
      return {
        valid: errors.length === 0,
        errors,
      };
    }
  }
  