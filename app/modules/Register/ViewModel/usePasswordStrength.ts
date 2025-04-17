const usePasswordStrength = (password: string | undefined): number => {
  // Return 0 for empty or undefined passwords
  if (!password || password.length === 0) return 0;
  
  let score = 0;
  
  // Base score from length (0 to 0.4)
  if (password.length <= 4) {
    score += 0.1;
  } else if (password.length <= 8) {
    score += 0.2;
  } else if (password.length <= 12) {
    score += 0.3;
  } else {
    score += 0.4;
  }
  
  // Character diversity (0 to 0.6)
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  
  // Count character types
  const charTypes = [hasLowercase, hasUppercase, hasDigit, hasSpecial].filter(Boolean).length;
  score += charTypes * 0.15;
  
  // Penalties for common patterns (up to -0.3)
  
  // Repeating characters (e.g., "aaa", "111")
  if (/(.)\1{2,}/.test(password)) {
    score -= 0.15;
  }
  
  // Sequential characters (e.g., "abc", "123")
  const sequences = ['abcdefghijklmnopqrstuvwxyz', '0123456789', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  for (const seq of sequences) {
    // Check for sequences of 3 or more characters
    for (let i = 0; i < seq.length - 2; i++) {
      const fragment = seq.substring(i, i + 3);
      if (password.toLowerCase().includes(fragment)) {
        score -= 0.15;
        break;
      }
    }
  }
  
  // Common words penalty
  const commonWords = ['password', 'admin', '123456', 'qwerty', 'welcome'];
  if (commonWords.some(word => password.toLowerCase().includes(word))) {
    score -= 0.15;
  }
  
  // Ensure score is between 0 and 1
  return Math.max(0, Math.min(1, score));
};

export { usePasswordStrength };