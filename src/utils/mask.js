export const maskPhone = (phone) => {
    if (!phone) return '';
  
    const cleaned = phone.replace(/\D/g, '');
  
    const match = cleaned.match(/^(\d{1,3})?(\d{1,3})?(\d{1,2})?(\d{1,2})?$/);
    if (match) {
      return `(${match[1] || ''}) - ${match[2] || ''} - ${match[3] || ''}${match[4] ? ' - ' + match[4] : ''}`;
    }
  
    return phone;
  };