const SUPABASE_URL = "YOUR_URL";
const SUPABASE_KEY = "YOUR_KEY";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Login with Google
async function login() {
  await supabase.auth.signInWithOAuth({
    provider: 'google'
  });
}

// Fetch firms
async function loadFirms() {
  const { data, error } = await supabase
    .from('firms')
    .select('*');

  const container = document.getElementById("firms");
  container.innerHTML = "";

  data.forEach(firm => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${firm.name}</h3>
      <p>Profit Split: ${firm.profit_split}%</p>
      <p>Price: $${firm.price}</p>
      <a href="${firm.affiliate_url}" target="_blank">
        <button>Start Challenge</button>
      </a>
    `;
    container.appendChild(div);
  });
}

loadFirms();
