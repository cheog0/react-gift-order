export const validateMessage = (message: string): string | null => {
  if (!message.trim()) return '메시지를 입력해주세요.';
  return null;
};

export const validateSenderName = (name: string): string | null => {
  if (!name.trim()) return '이름을 입력해주세요.';
  return null;
};

export const validateRecipientName = (name: string): string | null => {
  if (!name.trim()) return '이름을 입력해주세요.';
  return null;
};

export const validateRecipientPhone = (phone: string): string | null => {
  if (!phone.trim()) return '전화번호를 입력해주세요.';
  const phoneRegex = /^010(-?\d{4})-?(\d{4})$/;
  if (!phoneRegex.test(phone)) return '올바른 전화번호 형식이 아닙니다.';
  return null;
};

export const validateQuantity = (quantity: number): string | null => {
  if (quantity < 1) return '구매 수량은 1개 이상이어야 합니다.';
  return null;
};
