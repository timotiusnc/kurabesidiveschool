const defaultWAText =
  "Halo Kurabesi, saya dapat kontak ini dari https://kurabesidiveschool.com. Saya mau tahu lebih lanjut mengenai sertifikasi scuba diving.";

export const generateWALink = ({
  phone,
  text,
}: {
  phone: string;
  text?: string;
}) => {
  return `https://wa.me/${phone}?text=${text ?? defaultWAText}`;
};
