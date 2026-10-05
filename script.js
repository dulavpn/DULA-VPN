// CHANGE THIS to your WhatsApp number in international format, without + or spaces.
const WHATSAPP = "94723363272";

document.querySelectorAll(".buy").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const plan=btn.dataset.plan, price=btn.dataset.price;
    const msg=`Hi DULA VPN! I want to order the ${plan} plan (${price}).`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,"_blank");
  });
});
document.getElementById("whatsapp").addEventListener("click",()=>{
  const [plan,price]=document.getElementById("package").value.split("|");
  const name=document.getElementById("name").value.trim() || "Customer";
  const msg=`Hi DULA VPN!%0A%0AName: ${name}%0APlan: ${plan}%0APrice: ${price}%0A%0AI would like to place this order.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`,"_blank");
});
