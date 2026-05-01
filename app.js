
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

<script>
const SUPABASE_URL = "https://rgtuoeoxgqsowoooykvd.supabase.co";
const SUPABASE_KEY = "sb_publishable_Txl4__d7Pbc0g4QzXfa6AA_nnH0ftgj";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadFirms() {
  const { data, error } = await client.from('firms').select('*');

  console.log(data, error); // DEBUG

  const container = document.getElementById("firms");
  container.innerHTML = "";

  data?.forEach(firm => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${firm.name}</h3>
      <p>${firm.profit_split}% split</p>
      <p>$${firm.price}</p>
    `;
    container.appendChild(div);
  });
}

loadFirms();
</script>
console.log("Loading firms...");

const { data, error } = await client
  .from('firm')
  .select('*');

console.log("FETCH START");

const { data, error } = await client.from('firms').select('*');

console.log("DATA:", data);
console.log("ERROR:", error);
];

function loadFirms() {
  const container = document.getElementById("firms");
  container.innerHTML = "";

  firms.forEach(firm => {
    const div = document.createElement("div");
    div.className = "card";
   div.innerHTML = `
  <h3>${firm.name}</h3>
  <p>💰 Profit Split: ${firm.profit_split}%</p>
  <p>💸 Price: $${firm.price}</p>
  <p>📉 Drawdown: ${firm.max_drawdown || "N/A"}</p>
  <p>⏱ Payout: ${firm.payout || "N/A"}</p>
  <button onclick="window.open('${firm.affiliate_url}')">
    Start Challenge
  </button>
`;
      </a>
    `;
    container.appendChild(div);
  });
}

loadFirms();
