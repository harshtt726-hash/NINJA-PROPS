<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

<script>
const SUPABASE_URL = "https://rgtuoeoxgqsowoooykvd.supabase.co";
const SUPABASE_KEY = "sb_publishable_Txl4__d7Pbc0g4QzXfa6AA_nnH0ftgj";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadFirms() {
  try {
    const { data, error } = await client.from('firms').select('*');

    console.log("DATA:", data);
    console.log("ERROR:", error);

    const container = document.getElementById("firms");
    container.innerHTML = "";

    if (error) {
      container.innerHTML = "<p>Error loading data</p>";
      return;
    }

    if (!data || data.length === 0) {
      container.innerHTML = "<p>No firms found</p>";
      return;
    }

    data.forEach(firm => {
      const div = document.createElement("div");
      div.className = "card";
     div.innerHTML = `
  <div class="badge">${firm.profit_split}% Split</div>
  <h3>${firm.name}</h3>

  <p>💰 Price: $${firm.price}</p>
  <p>📉 Drawdown: ${firm.max_drawdown || "10%"}</p>
  <p>⏱ Payout: ${firm.payout || "Bi-Weekly"}</p>

  <button onclick="window.open('${firm.affiliate_url}')">
    Start Challenge
  </button>
`;
      `;
      container.appendChild(div);
    });

  } catch (err) {
    console.error(err);
  }
}

loadFirms();
</script>
