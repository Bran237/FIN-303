// All original notebook data and enrichment passes are preserved below.
const CHAPTERS = [];

CHAPTERS.push({
id:'ch3',
title:'Chapter 3: Financial Statements, Cash Flow, and Taxes',

/* ---------------------------- SUMMARY ---------------------------- */
summary:`
<div class="callout"><b>Scope from your slides:</b> know the annual report, balance sheet, and income statement, plus free cash flow, MVA, and taxes. You do <u>not</u> need the statement of cash flows (section 3.4). Assigned: ST-1, ST-2 a–d; Questions 3-1 to 3-5, 3-7, 3-9, 3-10; Problems 3-1, 3-2, 3-3, 3-5.</div>

<h2>3.1 The annual report and the financial statements</h2>
<div class="scroll"><table>
<thead><tr><th>Statement</th><th>What it shows</th><th>Time</th></tr></thead>
<tbody>
<tr><td>Balance sheet</td><td>What the firm owns (assets) and who has claims on it (liabilities and equity)</td><td>One date (a snapshot)</td></tr>
<tr><td>Income statement</td><td>Sales, costs, and profit</td><td>A period (quarter or year)</td></tr>
<tr><td>Statement of cash flows</td><td>How operating, investing, and financing activities changed cash</td><td>A period</td></tr>
<tr><td>Statement of stockholders' equity</td><td>How and why equity (retained earnings) changed</td><td>A period</td></tr>
</tbody></table></div>
<p>The <b>annual report</b> is the key document a corporation sends stockholders: a verbal section plus the four statements. The statements are linked: net income from the income statement flows into retained earnings on the balance sheet.</p>

<h3>Balance sheet essentials</h3>
<div class="formula">Total assets = Total liabilities + Total equity<small>It always balances. Every dollar of assets is claimed by a creditor or a stockholder.</small></div>
<div class="formula">Stockholders' equity = Paid-in capital + Retained earnings = Total assets − Total liabilities<small>Equity is a residual claim, so stockholders absorb gains and losses first (why stock is riskier than bonds).</small></div>
<ul>
<li><b>Only cash is spendable money.</b> Receivables are uncollected credit sales; inventories are carried at cost; fixed assets are cost minus depreciation.</li>
<li><b>Retained earnings is a claim, not a pile of cash.</b> It is the cumulative total of earnings kept since founding. Allied has $810M of retained earnings but only $10M of cash.</li>
<li><b>Book value ≠ market value.</b> Assets sit at historical cost. Allied's book value per share is $12.53 but the stock trades at $23.06.</li>
<li><b>Current assets are often called working capital.</b> Accounts payable is effectively short-term financing from suppliers.</li>
</ul>

<h3>Allied Food Products: the running example (millions, 2021 / 2020)</h3>
<div class="scroll"><table>
<thead><tr><th>Balance sheet</th><th class="n">2021</th><th class="n">2020</th><th>Income statement</th><th class="n">2021</th><th class="n">2020</th></tr></thead>
<tbody>
<tr><td>Cash</td><td class="n">$10</td><td class="n">$80</td><td>Net sales</td><td class="n">$3,000.0</td><td class="n">$2,850.0</td></tr>
<tr><td>Receivables</td><td class="n">375</td><td class="n">315</td><td>Operating costs (ex. D&amp;A)</td><td class="n">2,622.0</td><td class="n">2,497.0</td></tr>
<tr><td>Inventories</td><td class="n">615</td><td class="n">415</td><td>Depreciation &amp; amortization</td><td class="n">100.0</td><td class="n">90.0</td></tr>
<tr><td><b>Total current assets</b></td><td class="n"><b>$1,000</b></td><td class="n"><b>$810</b></td><td><b>EBIT</b></td><td class="n"><b>$278.0</b></td><td class="n"><b>$263.0</b></td></tr>
<tr><td>Net plant &amp; equipment</td><td class="n">1,000</td><td class="n">870</td><td>Interest</td><td class="n">83.0</td><td class="n">60.0</td></tr>
<tr><td><b>Total assets</b></td><td class="n"><b>$2,000</b></td><td class="n"><b>$1,680</b></td><td>EBT</td><td class="n">195.0</td><td class="n">203.0</td></tr>
<tr><td>Accounts payable</td><td class="n">60</td><td class="n">30</td><td>Taxes (25%)</td><td class="n">48.8</td><td class="n">50.8</td></tr>
<tr><td>Accruals</td><td class="n">140</td><td class="n">130</td><td><b>Net income</b></td><td class="n"><b>$146.3</b></td><td class="n"><b>$152.3</b></td></tr>
<tr><td>Notes payable</td><td class="n">110</td><td class="n">60</td><td>Dividends</td><td class="n">86.3</td><td class="n">79.5</td></tr>
<tr><td><b>Total current liabilities</b></td><td class="n"><b>$310</b></td><td class="n"><b>$220</b></td><td>Addition to retained earnings</td><td class="n">60.0</td><td class="n">72.8</td></tr>
<tr><td>Long-term bonds</td><td class="n">750</td><td class="n">580</td><td>Stock price</td><td class="n">$23.06</td><td class="n">$26.00</td></tr>
<tr><td>Total common equity</td><td class="n">$940</td><td class="n">$880</td><td>Shares outstanding</td><td class="n">75M</td><td class="n">75M</td></tr>
</tbody></table></div>

<h3>Working capital and debt formulas</h3>
<div class="formula">NWC = Current assets − Current liabilities<small>Allied 2021: 1,000 − 310 = $690M</small></div>
<div class="formula">NOWC = (Current assets − Excess cash) − (Current liabilities − Notes payable)<small>Allied 2021: 1,000 − (310 − 110) = $800M. Allied 2020: 810 − (220 − 60) = $650M.</small></div>
<div class="formula">Total debt = Notes payable + Long-term debt<small>Only interest-bearing borrowing. Allied 2021: 110 + 750 = $860M.</small></div>
<div class="formula">Total liabilities = Total debt + Accounts payable + Accruals<small>Allied 2021: 860 + 60 + 140 = $1,060M</small></div>
<div class="callout"><b>Exam trap:</b> NWC and NOWC are not the same. NOWC removes notes payable (a financing item) and excess cash. Total liabilities is bigger than total debt.</div>

<h3>Income statement essentials</h3>
<div class="formula">EBIT (operating income) = Sales − Operating costs<small>Allied 2021: 3,000 − 2,722 = $278M</small></div>
<div class="formula">EBITDA = EBIT + Depreciation + Amortization<small>Allied 2021: 278 + 100 = $378M</small></div>
<div class="formula">EBT = EBIT − Interest &nbsp;|&nbsp; Net income = EBT × (1 − T)<small>Work backward: EBT = Net income ÷ (1 − T)</small></div>
<div class="formula">EPS = Net income ÷ Shares &nbsp;|&nbsp; DPS = Dividends ÷ Shares &nbsp;|&nbsp; BVPS = Common equity ÷ Shares<small>Allied: 146.3/75 = $1.95; 86.3/75 = $1.15; 940/75 = $12.53</small></div>
<ul>
<li><b>Depreciation and amortization are non-cash charges.</b> Depreciation is for tangible assets, amortization for intangibles (patents, goodwill). They cut net income but no cash leaves.</li>
<li><b>Rising EBIT does not guarantee rising net income.</b> Allied's EBIT rose from $263M to $278M but net income fell from $152.3M to $146.3M because interest jumped from $60M to $83M.</li>
</ul>

<h3>Statement of stockholders' equity</h3>
<div class="formula">Addition to retained earnings = Net income − Dividends<small>Ending RE = Beginning RE + Net income − Dividends. Allied: 750 + 146.3 − 86.3 = $810M</small></div>

<h3>Limits of the statements</h3>
<p>GAAP leaves managers discretion (inventory valuation, depreciation methods, timing of transactions), so identical firms can report different numbers legally. Bonuses tied to short-term earnings create an incentive to manage the numbers. In the worst cases it is fraud: WorldCom overstated assets by about $11 billion and Enron hid problems in subsidiaries. The <b>Sarbanes-Oxley Act (2002)</b> requires CEO and CFO certification of the statements.</p>

<h2>3.2 Free cash flow, MVA, and EVA</h2>
<div class="formula">NOPAT = EBIT × (1 − T)<small>Profit the firm would earn with no debt. Allied: 278 × 0.75 = $208.5M</small></div>
<div class="formula">FCF = [EBIT(1 − T) + D&amp;A] − [Capital expenditures + ΔNOWC]<small>Left bracket = cash generated by operations. Right bracket = cash needed to grow.</small></div>
<ul>
<li><b>ΔNOWC</b> = this year's NOWC − last year's NOWC. Allied: 800 − 650 = $150M.</li>
<li><b>Capital expenditures</b> = Δ Net plant and equipment + Depreciation. Allied: (1,000 − 870) + 100 = $230M.</li>
<li><b>Allied 2021 FCF:</b> (208.5 + 100) − (230 + 150) = <b>−$71.5M</b>.</li>
<li><b>Negative FCF is not automatically bad.</b> Fast-growing firms often have it because investment outruns cash from operations. It is fine if the investments pay off.</li>
</ul>
<div class="formula">MVA = (Stock price × Shares outstanding) − Book value of equity<small>Allied: 23.06 × 75 − 940 = $789.5M</small></div>
<div class="formula">EVA = NOPAT − (Total invested capital × After-tax cost of capital)<small>Example: 150,000 − (1,000,000 × 0.10) = $50,000</small></div>
<ul>
<li><b>MVA</b> is the market's verdict on the whole firm. Positive MVA means stockholders hold more value than they put in. A rising overall market can lift MVA without any management skill.</li>
<li><b>EVA</b> can be measured for a single division. Net income subtracts the cost of debt but never the cost of equity, so a firm can show positive net income and still have negative EVA.</li>
</ul>
<h3>From your slides: D'Leon Inc.</h3>
<ul>
<li>AT operating income 2021 = −130,948 × (1 − 0.4) = −$78,569, versus +$114,257 in 2020.</li>
<li>MVA 2020 = ($8.50 × 100,000) − $663,768 = <b>$186,232</b>. MVA 2021 = ($2.25 × 100,000) − $492,592 = <b>−$267,592</b>. Negative MVA means shareholder wealth was destroyed.</li>
<li>FCF 2021 = [−130,948(1 − 0.4) + 116,960] − [(1,202,950 − 491,000) + 70,642] = <b>−$744,201</b>.</li>
</ul>

<h2>3.3 Taxes</h2>
<ul>
<li><b>Progressive tax:</b> higher income is taxed at higher rates. <b>Marginal rate</b> = rate on the next dollar. <b>Average rate</b> = total tax ÷ taxable income.</li>
</ul>
<div class="formula">Average tax rate = Total taxes paid ÷ Taxable income<small>$45,000 single filer: 4,617.50 + (45,000 − 40,125)(0.22) = $5,690 → 12.64% average vs 22% marginal</small></div>
<div class="formula">Corporate taxes = Taxable income × Tax rate<small>Your textbook uses a flat 25% (21% federal under the TCJA plus a state add-on)</small></div>
<div class="formula">Pretax income needed to pay $1 of dividends = 1 ÷ (1 − T)<small>At 25%: 1 ÷ 0.75 = $1.33. Interest needs only $1 of pretax income.</small></div>
<ul>
<li><b>Interest paid is tax deductible; dividends paid are not.</b> The tax code therefore favors debt. Dividends are paid from after-tax income, which is double taxation.</li>
<li><b>Dividends received by a corporation:</b> 50% is excluded from taxable income (effective rate 12.5% at 25%), versus full tax on interest income. This avoids triple taxation.</li>
<li><b>Loss carryforward:</b> a loss can offset future taxable income, capped at 80% of that year's taxable income. Example: $12M loss, then $10M income → apply $8M, tax on $2M = $500,000, with $4M of loss left.</li>
<li><b>Capital gains:</b> short-term (held one year or less) are taxed as ordinary income. Long-term gains get preferential rates (0%, 15%, or 20%).</li>
<li><b>Traditional IRA:</b> deductible now, taxed at withdrawal after 59½. <b>Roth IRA:</b> no deduction now, tax-free qualified withdrawals including growth.</li>
<li><b>AMT:</b> a parallel tax system meant to stop high earners from using deductions to avoid tax (the TCJA repealed the corporate AMT).</li>
<li><b>S corporation:</b> 100 or fewer shareholders, taxed like a proprietorship or partnership, so no corporate income tax.</li>
<li><b>TCJA (2017):</b> flat 21% corporate rate (from a top rate near 35%), a larger standard deduction, capped state and local tax deduction, 100% expensing of many assets. Most individual provisions sunset at the end of 2025; most corporate provisions are permanent.</li>
</ul>
`,

/* ---------------------------- HOMEWORK ---------------------------- */
homework:[
{
 id:'p31', title:'Problem 3-1: Balance sheet',
 given:'Total assets $2,500,000; net plant and equipment $2,000,000; notes payable $150,000; long-term debt $750,000; total common equity $1,500,000. No excess cash, no preferred stock. The firm has accounts payable and accruals.',
 parts:[
  {l:'a', ask:"What is the company's total debt?", f:'Total debt = Notes payable + Long-term debt',
   rows:[['Notes payable','$150,000'],['Long-term debt','$750,000']], ans:['Total debt','$900,000'], calc:'150000 + 750000 ='},
  {l:'b', ask:'Total liabilities and equity on the balance sheet?', f:'Total assets = Total liabilities + Equity, so total liabilities and equity must equal total assets',
   rows:[['Total assets (given)','$2,500,000']], ans:['Total liabilities and equity','$2,500,000']},
  {l:'c', ask:'Balance of current assets?', f:'Total assets = Current assets + Net fixed assets',
   rows:[['Total assets','$2,500,000'],['− Net plant and equipment','$2,000,000']], ans:['Current assets','$500,000'], calc:'2500000 − 2000000 ='},
  {l:'d', ask:'Balance of current liabilities?', f:'Total liabilities = Total assets − Equity; Current liabilities = Total liabilities − Long-term debt',
   rows:[['Total liabilities = 2,500,000 − 1,500,000','$1,000,000'],['− Long-term debt','$750,000']], ans:['Current liabilities','$250,000'], calc:'2500000 − 1500000 − 750000 ='},
  {l:'e', ask:'Accounts payable and accruals (as one line)?', f:'Current liabilities = (Accounts payable + Accruals) + Notes payable',
   rows:[['Current liabilities','$250,000'],['− Notes payable','$150,000']], ans:['Accounts payable and accruals','$100,000'], calc:'250000 − 150000 ='},
  {l:'f', ask:"Net working capital?", f:'NWC = Current assets − Current liabilities',
   rows:[['Current assets','$500,000'],['− Current liabilities','$250,000']], ans:['NWC','$250,000'], calc:'500000 − 250000 ='},
  {l:'g', ask:'Net operating working capital?', f:'NOWC = (Current assets − Excess cash) − (Current liabilities − Notes payable)',
   rows:[['Operating current assets = 500,000 − 0','$500,000'],['Operating current liabilities = 250,000 − 150,000','$100,000']], ans:['NOWC','$400,000'], calc:'500000 − (250000 − 150000) ='},
  {l:'h', ask:'Why do f and g differ?', f:'',
   rows:[['NOWC − NWC = 400,000 − 250,000','$150,000']], ans:['Equals notes payable','$150,000'],
   note:'NWC treats notes payable as a current liability. NOWC removes it because notes payable is interest-bearing financing, not an operating liability. There is no excess cash here, so notes payable is the entire gap.'}
 ]
},
{
 id:'p32', title:'Problem 3-2: Income statement (find interest)',
 given:'Net income $15 million; EBIT $20.8 million; tax rate 25%. Find interest expense.',
 parts:[
  {l:'', ask:'What was its interest expense?', f:'Net income = EBT × (1 − T), so EBT = Net income ÷ (1 − T). Interest = EBIT − EBT.',
   rows:[['Net income','$15,000,000'],['1 − T = 1 − 0.25','0.75'],['EBT = 15,000,000 ÷ 0.75','$20,000,000'],['EBIT','$20,800,000'],['Interest = EBIT − EBT = 20,800,000 − 20,000,000','$800,000']],
   ans:['Interest expense','$800,000'], calc:'1 − 0.25 = 0.75, then 15000000 ÷ 0.75 = 20000000',
   note:'Check: 20.8M − 0.8M = 20.0M EBT; tax at 25% = 5.0M; net income = 15.0M. ✔'}
 ]
},
{
 id:'p33', title:'Problem 3-3: Income statement (find depreciation and amortization)',
 given:'EBITDA $7.5 million; net income $2.625 million; interest expense $1.5 million; tax rate 25%.',
 parts:[
  {l:'', ask:'What was its charge for depreciation and amortization?', f:'EBT = NI ÷ (1 − T); EBIT = EBT + Interest; EBITDA = EBIT + D&A, so D&A = EBITDA − EBIT',
   rows:[['EBT = 2,625,000 ÷ 0.75','$3,500,000'],['EBIT = EBT + Interest = 3,500,000 + 1,500,000','$5,000,000'],['D&A = EBITDA − EBIT = 7,500,000 − 5,000,000','$2,500,000']],
   ans:['Depreciation and amortization','$2,500,000'], calc:'2625000 ÷ 0.75 = 3500000',
   note:'Check: 5.0M − 1.5M = 3.5M; × 0.75 = 2.625M. ✔'}
 ]
},
{
 id:'p34', title:"Problem 3-4: Statement of stockholders' equity (dividends)",
 given:'Net income $75 million; retained earnings now $825 million; previous retained earnings $784 million. All declared dividends were paid. (Not on your assigned list, but it is a good practice problem.)',
 parts:[
  {l:'', ask:'How much in dividends was paid?', f:'Ending RE = Beginning RE + Net income − Dividends, so Addition to RE = Net income − Dividends',
   rows:[['Addition to RE = 825 − 784','$41 million'],['Dividends = Net income − Addition to RE = 75 − 41','$34 million']],
   ans:['Dividends paid','$34 million'], calc:'825 − 784 = 41, then 75 − 41 =',
   note:'Check: 784 + 75 − 34 = 825. ✔'}
 ]
},
{
 id:'p35', title:'Problem 3-5: MVA (find shares outstanding)',
 given:'Common equity on the balance sheet $900 million; stock price $80 per share; MVA $50 million.',
 parts:[
  {l:'', ask:'How many common shares are outstanding?', f:'MVA = Market value of equity − Book value of equity, and Market value of equity = Price × Shares',
   rows:[['Market value of equity = Book + MVA = 900 + 50','$950 million'],['Shares = Market value ÷ Price = 950,000,000 ÷ 80','11,875,000 shares']],
   ans:['Shares outstanding','11.875 million'], calc:'950000000 ÷ 80 = 11875000',
   note:'Check: 11.875M × $80 = $950M; $950M − $900M = $50M MVA. ✔'}
 ]
},
{
 id:'st2', title:'ST-2: Net income and cash flow (Rattner Robotics)',
 given:'EBIT $5M; depreciation $1M; interest $1M; tax rate 25%. Year-end: operating current assets $14M, accounts payable $3M, accruals $1M, notes payable $2M, net plant and equipment $15M. No excess cash; no other current liabilities; depreciation is the only noncash item. Prior-year net plant and equipment $12M; NOWC constant over time.',
 parts:[
  {l:'a', ask:"What was the company's net income?", f:'EBT = EBIT − Interest; Net income = EBT × (1 − T)',
   rows:[['EBIT','$5.00M'],['− Interest','$1.00M'],['EBT','$4.00M'],['− Taxes at 25%','$1.00M']], ans:['Net income','$3.00M'], calc:'4 × 0.75 = 3'},
  {l:'b', ask:'Net operating working capital (NOWC)?', f:'NOWC = (Current assets − Excess cash) − (Current liabilities − Notes payable)',
   rows:[['Current liabilities = 3 + 1 + 2','$6.00M'],['Operating current assets = 14 − 0','$14.00M'],['Operating current liabilities = 6 − 2 (AP + accruals)','$4.00M']], ans:['NOWC','$10.00M'], calc:'14 − (6 − 2) ='},
  {l:'c', ask:'Net working capital (NWC)?', f:'NWC = Current assets − Current liabilities',
   rows:[['Current assets','$14.00M'],['− Current liabilities','$6.00M']], ans:['NWC','$8.00M'], calc:'14 − 6 ='},
  {l:'d', ask:'Free cash flow for the year?', f:'FCF = [EBIT(1 − T) + D&A] − [Capital expenditures + ΔNOWC]',
   rows:[['NOPAT = 5 × (1 − 0.25)','$3.75M'],['+ Depreciation','$1.00M'],['Cash from operations','$4.75M'],['Capital expenditures = Δ Net PPE + Depreciation = (15 − 12) + 1','$4.00M'],['ΔNOWC (constant)','$0.00M'],['Cash needed for growth = 4 + 0','$4.00M']],
   ans:['FCF = 4.75 − 4.00','$0.75M'], calc:'5 × 0.75 = 3.75; 3.75 + 1 = 4.75; 4.75 − 4 = 0.75',
   note:'Why capital expenditures = ΔNet PPE + Depreciation: net plant ends the year as beginning net plant plus new spending minus depreciation. Net plant rose $3M even after $1M of depreciation, so the firm spent $4M. This matches Allied: (1,000 − 870) + 100 = $230M. Cross-check: NOPAT 3.75 − increase in operating capital 3.0 (25 vs 22) = 0.75. ✔'}
 ]
}
],

homeworkConcept:[
{
 id:'q35', title:'Question 3-5: Can investors trust GAAP and audited statements?',
 body:`<p><b>Short answer: Yes, investors still need to worry.</b> Being GAAP-based and audited does not guarantee the numbers show the true picture.</p>
 <ul>
 <li><b>GAAP leaves discretion.</b> Managers choose inventory valuation methods, depreciation methods, and the timing of certain transactions, so two firms in identical situations can report different numbers, entirely legally.</li>
 <li><b>Incentives.</b> When executive bonuses depend on short-term earnings, managers have a reason to manage the numbers.</li>
 <li><b>Outright fraud happens.</b> WorldCom overstated assets by about $11 billion to understate costs and inflate profits. Enron overstated assets and moved them into subsidiaries to hide the truth. Both went bankrupt, executives went to jail, and their auditor, Arthur Andersen, was put out of business, so audits can fail.</li>
 <li><b>Statements show historical cost, not market value.</b> A clean balance sheet can still understate or overstate true value (Allied's book value per share is $12.53; the market price is $23.06).</li>
 <li><b>The response:</b> the Sarbanes-Oxley Act of 2002 requires stronger internal auditing and CEO/CFO certification, but investors should still read statements critically.</li>
 </ul>`
},
{
 id:'q39', title:'Question 3-9: How do management actions show up in EVA and MVA, and how are they connected?',
 body:`<p><b>MVA (market view).</b> MVA = market value of equity − book value of equity. The stock price reflects what investors expect about the firm's future cash flows and risk, so good management decisions (profitable investments, strong free cash flow, sound financing) raise the stock price and therefore MVA. Poor decisions lower it. D'Leon is an example: its MVA fell from +$186,232 to −$267,592 as its stock price dropped.</p>
 <p><b>EVA (operating view).</b> EVA = NOPAT − (invested capital × after-tax cost of capital). Managers directly influence every piece: raise NOPAT (higher sales, lower operating costs), use less capital (tighter inventory and receivables), and lower the cost of capital (smarter financing). It can be measured for a single division, so it works as a manager-level scorecard. Unlike net income, it charges for the cost of equity as well as debt.</p>
 <p><b>How they connect.</b> Both measure value creation beyond accounting profit. EVA tracks value created in a given year; MVA is the market's cumulative verdict on the whole firm. Sustained positive EVA raises expected future cash flows, which pushes up the stock price and MVA. A negative EVA does the opposite. Many finance texts state this precisely as "MVA reflects the present value of expected future EVAs." That exact wording was not in the text I could access, so confirm it in your book before using it on an exam.</p>
 <p class="note">Caveat from the text: a rising overall stock market can lift MVA without any management skill.</p>`
},
{
 id:'q310', title:'Question 3-10: "Our tax rates are progressive."',
 body:`<p>A progressive tax system taxes higher income at higher rates. As income climbs, each additional slice of income falls into a higher bracket, so the rate on the <b>next dollar</b> (the marginal rate) rises.</p>
 <p><b>Why average and marginal rates differ.</b> Only the top slice of income is taxed at the top bracket's rate; income below it is taxed at the lower bracket rates. Textbook example: a single filer with $45,000 of taxable income owes $4,617.50 on the first $40,125 plus 22% of the rest: 4,617.50 + (45,000 − 40,125)(0.22) = $5,690. Average rate = 5,690 ÷ 45,000 = <b>12.64%</b>, well below the <b>22%</b> marginal rate.</p>
 <p class="note">Your slides say both personal and corporate taxes have a progressive structure. Your textbook simplifies the corporate side to a flat 25% (21% federal under the TCJA plus a state add-on).</p>`
}
],

st1:[
 ['a. Annual report','The yearly report to stockholders: a verbal section plus the four financial statements.'],
 ['a. Balance sheet','Snapshot at one date of what the firm owns (assets) and who has claims on those assets (liabilities and equity).'],
 ['a. Income statement','Revenues, expenses, and profit over a period, such as a quarter or year.'],
 ['a. Statement of cash flows','Shows how operating, investing, and financing activities changed the firm\'s cash over a period.'],
 ['a. Statement of stockholders\' equity','Shows how and why total stockholders\' equity changed during the year.'],
 ['b. Stockholders\' equity','Paid-in capital + retained earnings; also total assets − total liabilities.'],
 ['b. Retained earnings','Cumulative total of all earnings kept in the business rather than paid as dividends. A claim, not cash.'],
 ['b. Working capital','Current assets (they "turn over" during the year).'],
 ['b. Net working capital','Current assets − current liabilities.'],
 ['b. NOWC','(Current assets − excess cash) − (current liabilities − notes payable).'],
 ['b. Total debt','Short-term debt (notes payable) + long-term debt: only interest-bearing borrowing.'],
 ['c. Depreciation','Non-cash annual charge for the estimated cost of tangible assets used up.'],
 ['c. Amortization','Non-cash charge like depreciation, for intangible assets such as patents or goodwill.'],
 ['c. Operating income (EBIT)','Earnings before interest and taxes: sales − operating costs.'],
 ['c. EBITDA','EBIT + depreciation + amortization; a rough proxy for cash generated by operations.'],
 ['c. Free cash flow (FCF)','Cash the firm could withdraw without hurting its ability to operate: [EBIT(1 − T) + D&A] − [CapEx + ΔNOWC].'],
 ['d. NOPAT','Net operating profit after taxes = EBIT(1 − T); profit if the firm had no debt.'],
 ['e. MVA','Market value of equity − book value of equity.'],
 ['e. EVA','NOPAT − dollar cost of all capital used (invested capital × after-tax cost of capital).'],
 ['f. Progressive tax','Higher income is taxed at higher rates.'],
 ['f. Marginal tax rate','The rate on the next (last) dollar of income.'],
 ['f. Average tax rate','Total taxes paid ÷ taxable income.'],
 ['g. Tax loss carryforward','Lets a firm apply a loss against future years\' taxable income (capped at 80% of that year\'s taxable income).'],
 ['g. Alternative minimum tax (AMT)','A parallel tax system meant to keep high earners from using deductions to avoid meaningful tax.'],
 ['h. Traditional IRA','Contributions deductible now; taxes deferred until withdrawal after age 59½.'],
 ['h. Roth IRA','Funded with after-tax dollars; qualified withdrawals, including growth, are tax-free after 59½.'],
 ['i. Capital gain (loss)','Profit (loss) from selling an asset for more (less) than its purchase price. Held one year or less: taxed as ordinary income; held longer: preferential rates.'],
 ['j. S corporation','A corporation with 100 or fewer shareholders that is taxed like a proprietorship or partnership.']
],

/* ---------------------------- FLASHCARDS ---------------------------- */
cards:[
 {k:'term',  f:'Annual report', b:'The key yearly document a corporation gives stockholders: a verbal section plus the four financial statements.'},
 {k:'term',  f:'Balance sheet', b:'A snapshot at one date of what the firm owns (assets) and who has claims on it (liabilities and equity).'},
 {k:'term',  f:'Income statement', b:'Revenues, expenses, and profit over a period of time (quarter or year).'},
 {k:'term',  f:'Statement of stockholders\' equity', b:'Shows how and why total equity (especially retained earnings) changed during the year.'},
 {k:'term',  f:'Retained earnings', b:'Cumulative earnings kept in the business since founding. A claim on assets, not a pile of cash.'},
 {k:'term',  f:'Working capital', b:'Current assets, which "turn over" (are used and replaced) during the year.'},
 {k:'term',  f:'Net working capital (NWC)', b:'Current assets − current liabilities.'},
 {k:'term',  f:'Net operating working capital (NOWC)', b:'(Current assets − excess cash) − (current liabilities − notes payable). Isolates operations from financing.'},
 {k:'term',  f:'Total debt vs. total liabilities', b:'Total debt = notes payable + long-term debt (interest-bearing only). Total liabilities = total debt + accounts payable + accruals.'},
 {k:'term',  f:'Depreciation vs. amortization', b:'Both are non-cash charges. Depreciation: tangible assets. Amortization: intangibles like patents and goodwill.'},
 {k:'term',  f:'EBIT', b:'Operating income: earnings before interest and taxes = sales − operating costs.'},
 {k:'term',  f:'EBITDA', b:'EBIT + depreciation + amortization; a rough proxy for cash generated by operations.'},
 {k:'term',  f:'Free cash flow (FCF)', b:'Cash the firm could withdraw without harming its ability to operate and generate future cash flows.'},
 {k:'term',  f:'NOPAT', b:'Net operating profit after taxes = EBIT(1 − T). Profit the firm would earn with no debt.'},
 {k:'term',  f:'Market value added (MVA)', b:'Market value of equity − book value of equity. Compares what the market says equity is worth to what stockholders put in.'},
 {k:'term',  f:'Economic value added (EVA)', b:'NOPAT minus the dollar cost of all capital used. Can be measured for a division. Charges for equity capital too.'},
 {k:'term',  f:'Progressive tax', b:'A tax system in which higher incomes are taxed at higher rates.'},
 {k:'term',  f:'Marginal vs. average tax rate', b:'Marginal: rate on the next dollar of income. Average: total taxes ÷ taxable income. Under a progressive tax, average < marginal.'},
 {k:'term',  f:'Tax loss carryforward', b:'Applies a loss against future taxable income, capped at 80% of that year\'s taxable income.'},
 {k:'term',  f:'Alternative minimum tax (AMT)', b:'A parallel tax system designed to stop high earners from using deductions to avoid meaningful tax.'},
 {k:'term',  f:'Traditional IRA vs. Roth IRA', b:'Traditional: deduct now, taxed at withdrawal after 59½. Roth: no deduction now, qualified withdrawals (with growth) are tax-free.'},
 {k:'term',  f:'Capital gain / capital loss', b:'Profit/loss from selling an asset above/below its purchase price. Held ≤ 1 year: ordinary income rates. Held > 1 year: preferential rates (0/15/20%).'},
 {k:'term',  f:'S corporation', b:'A corporation with 100 or fewer shareholders, taxed like a proprietorship or partnership (no corporate income tax).'},
 {k:'term',  f:'Why does the tax code favor debt?', b:'Interest paid is tax deductible; dividends paid are not (they come from after-tax income).'},
 {k:'term',  f:'Double taxation', b:'Corporate earnings are taxed at the corporate level, then again as personal income when paid out as dividends.'},
 {k:'formula', f:'Balance sheet identity; stockholders\' equity', b:'Assets = Liabilities + Equity. Equity = Paid-in capital + Retained earnings = Total assets − Total liabilities.'},
 {k:'formula', f:'NWC', b:'Current assets − Current liabilities'},
 {k:'formula', f:'NOWC', b:'(Current assets − Excess cash) − (Current liabilities − Notes payable)'},
 {k:'formula', f:'Total debt', b:'Notes payable + Long-term debt'},
 {k:'formula', f:'Net income from EBIT', b:'Net income = (EBIT − Interest)(1 − T). To go backward: EBT = Net income ÷ (1 − T); Interest = EBIT − EBT.'},
 {k:'formula', f:'EBITDA and D&A', b:'EBITDA = EBIT + D&A, so D&A = EBITDA − EBIT.'},
 {k:'formula', f:'EPS, DPS, BVPS', b:'EPS = NI ÷ shares. DPS = Dividends ÷ shares. BVPS = Common equity ÷ shares.'},
 {k:'formula', f:'Retained earnings roll-forward', b:'Ending RE = Beginning RE + Net income − Dividends. Dividends = Net income − Addition to RE.'},
 {k:'formula', f:'NOPAT', b:'EBIT × (1 − T)'},
 {k:'formula', f:'Free cash flow', b:'FCF = [EBIT(1 − T) + D&A] − [CapEx + ΔNOWC]'},
 {k:'formula', f:'Capital expenditures from the balance sheet', b:'CapEx = (Ending net PPE − Beginning net PPE) + Depreciation'},
 {k:'formula', f:'ΔNOWC', b:'NOWC this year − NOWC last year'},
 {k:'formula', f:'MVA', b:'(Stock price × Shares outstanding) − Book value of equity. To find shares: (Book + MVA) ÷ Price.'},
 {k:'formula', f:'EVA', b:'NOPAT − (Total invested capital × After-tax cost of capital)'},
 {k:'formula', f:'Average tax rate', b:'Total taxes paid ÷ Taxable income'},
 {k:'formula', f:'Pretax income needed to pay $1 of dividends', b:'1 ÷ (1 − T). At 25%: $1.33. Interest needs only $1.'}
],

/* ---------------------------- QUIZ ---------------------------- */
quiz:[
 {q:'Which statement is a snapshot of the firm at one specific date?', o:['Income statement','Balance sheet','Statement of cash flows','Statement of stockholders\' equity'], a:1,
  e:'The balance sheet reports assets, liabilities, and equity as of one date. The other three statements cover a period of time.'},
 {q:'A firm has current assets of $800, current liabilities of $500 (including $200 of notes payable), and no excess cash. What is its NOWC?', o:['$300','$500','$600','$800'], a:1,
  e:'NOWC = 800 − (500 − 200) = $500. NWC would be 800 − 500 = $300, so don\'t mix them up.'},
 {q:'EBIT is $400, interest is $100, and the tax rate is 25%. What is net income?', o:['$150','$225','$275','$300'], a:1,
  e:'EBT = 400 − 100 = 300. Net income = 300 × 0.75 = $225.'},
 {q:'Net income is $9 million, EBIT is $15 million, and the tax rate is 25%. What is interest expense?', o:['$2 million','$3 million','$4 million','$6 million'], a:1,
  e:'EBT = 9 ÷ 0.75 = $12M. Interest = EBIT − EBT = 15 − 12 = $3M.'},
 {q:'Beginning retained earnings were $200M, ending retained earnings are $230M, and net income was $50M. How much was paid in dividends?', o:['$10M','$20M','$30M','$50M'], a:1,
  e:'Ending RE = Beginning RE + NI − Dividends → 230 = 200 + 50 − D, so D = $20M.'},
 {q:'EBIT = $100, T = 25%, D&A = $20, capital expenditures = $60, ΔNOWC = $10. What is FCF?', o:['$25','$35','$85','$95'], a:0,
  e:'NOPAT = 100 × 0.75 = 75. FCF = (75 + 20) − (60 + 10) = 95 − 70 = $25. ($95 forgets the investment; $35 forgets ΔNOWC; $85 forgets capex.)'},
 {q:'A firm has 5 million shares at $30 and book equity of $120 million. What is its MVA?', o:['$30 million','$120 million','$150 million','−$30 million'], a:0,
  e:'Market value = 5M × $30 = $150M. MVA = 150 − 120 = $30M.'},
 {q:'A fast-growing company reports negative free cash flow. What is the best interpretation?', o:['It is certainly failing','Common for growth firms: investment needs exceed cash from operations, and it is fine if the investments pay off','It has violated GAAP','FCF can never be negative for a healthy firm'], a:1,
  e:'Allied\'s −$71.5M FCF came mainly from a one-time $230M plant expansion. Negative FCF is not automatically a red flag.'},
 {q:'A single filer has taxable income of $45,000, pays $5,690 in tax, and has a 22% marginal rate. What is the average tax rate?', o:['22.00%','12.64%','8.50%','15.00%'], a:1,
  e:'Average rate = 5,690 ÷ 45,000 = 12.64%. It is below the marginal rate because only the top slice of income is taxed at 22%.'},
 {q:'At a 25% tax rate, how much pretax income does a corporation need to pay $1 of dividends?', o:['$1.00','$1.25','$1.33','$0.75'], a:2,
  e:'1 ÷ (1 − 0.25) = $1.33. Interest needs only $1 of pretax income because it is deductible, which is why the tax code favors debt.'}
],

/* ---------------------------- VIDEO ---------------------------- */
video:{
 id:'ci39OSFps4A',
 caution:'This instructor uses a different textbook\'s vocabulary. "Operating cash flow" (OCF) = EBIT + depreciation − taxes, "net capital spending" = capital expenditures, and he uses NWC (not NOWC). In his Problem 1-1 the tax is the actual tax on EBT, while your textbook\'s FCF taxes EBIT (NOPAT). For homework answers, always use your textbook\'s FCF formula. Use the video for the ideas behind each piece.',
 rows:[
  {hw:'Problems 3-2, 3-3 and ST-2a (income statement)', why:'Builds an income statement step by step: EBIT, then EBT, then net income.',
   clips:[[621,'10:21–12:55','Sales − operating costs − depreciation = EBIT; − interest = EBT; − taxes = net income'],[822,'13:42–14:37','Why depreciation is a non-cash expense (needed for EBITDA and D&A)']]},
  {hw:'Problem 3-1 b–e (balance sheet)', why:'Reinforces that the balance sheet must balance, so one known side gives you the other.',
   clips:[[5310,'1:28:30–1:29:02','"Write total assets on both sides," since assets = liabilities + equity']]},
  {hw:'Problem 3-1 f and ST-2c (net working capital)', why:'Defines NWC = current assets − current liabilities with a worked example. Note the video does not cover NOWC.',
   clips:[[1229,'20:29–21:56','NWC = current assets − current liabilities, and the change from year to year'],[1563,'26:03–27:42','Why a rising working capital is a negative for cash flow (the ΔNOWC piece of FCF)']]},
  {hw:'Problem 3-4 (dividends from retained earnings)', why:'Same roll-forward as your textbook: beginning equity + net income − dividends = ending equity.',
   clips:[[4985,'1:23:05–1:24:13','Beginning equity + net income − dividends = ending equity, solving for dividends'],[5361,'1:29:21–1:30:35','Same roll-forward again, with a dividend payout ratio']]},
  {hw:'ST-2d (free cash flow, capital expenditures)', why:'Confirms the capex step: capex = change in net fixed assets + depreciation (the story method at 17:50 is easiest to remember).',
   clips:[[1070,'17:50–19:22','Net capital spending: the "story" method and the formula'],[1508,'25:08–26:03','Second worked example of net capital spending'],[1950,'32:30–34:18','How operating cash flow, capital spending, and working capital combine into cash flow from assets (his version of FCF)'],[277,'4:37–10:21','Why finance cares about cash flow rather than accounting profit']]},
  {hw:'Question 3-5 (GAAP and audited statements)', why:'Short explanation of why accounting numbers rest on estimates, which is the heart of the answer.',
   clips:[[389,'6:29–6:51','Accounting uses estimates and guesses (bad debts, building lives), so cash is "the realest thing"']]},
  {hw:'Question 3-10 (progressive taxes)', why:'The best match in the video: worked bracket example, average vs. marginal rate.',
   clips:[[2124,'35:24–36:29','The rookie mistake of taxing all income at the top rate; how brackets really work'],[2189,'36:29–37:47','Computing the total tax bill bracket by bracket'],[2261,'37:41–38:41','Average tax rate (total tax ÷ income) and marginal rate (rate on the next dollar)'],[2321,'38:41–39:29','Which rate to use for new projects: the marginal rate']]}
 ],
 missing:'Not covered in the video: NOWC (Problem 3-1g, ST-2b), MVA and EVA (Problem 3-5, Question 3-9). Use the Summary and Homework tabs for those.',
 later:[
  [7447,'2:04:07','Time value of money: intro and the future value formula (Chapter 5)'],
  [8006,'2:13:26','Future value of a lump sum with the BA II Plus keystrokes (Chapter 5)'],
  [8342,'2:19:02','Solving for the interest rate with the calculator; solving for N starts at 2:30:06 (Chapter 5)'],
  [9882,'2:44:42','Present value of an annuity, formula and calculator (Chapter 5)']
 ]
}
});

/* ============================================================
   CHAPTER 4
   ============================================================ */
const ts = s => s.split(':').reduce((a,b)=>a*60+(+b),0);

CHAPTERS.push({
id:'ch4',
title:`Chapter 4: Analysis of Financial Statements`,
calcNote:`<b>Calculator note:</b> Chapter 4 is ratio arithmetic only (÷, ×, −). There are no time-value-of-money keys here. Keep full precision on your calculator and round only the final answer. Where a problem gives a ratio and asks you to work backward (4-1, 4-5, 4-19, 4-22), rearrange the formula first, then plug in.`,

summary:`
<div class="callout"><b>Scope from your slides:</b> know how to calculate and interpret every ratio in the notes, including DuPont analysis, plus the limitations of ratio analysis and the problems with ROE. Your exam comes with a page of all the Chapter 4 formulas, so the skill that matters is knowing <u>which formula to use</u>, what goes in it, and what the answer means. Assigned: end-of-chapter problems 4-1 to 4-14 and 4-22.</div>

<h2>4.1 Why ratios, and the five categories</h2>
<p>Ratios standardize numbers so firms of different sizes can be compared. Compare through time (<b>trend analysis</b>) and against competitors (<b>peer or industry analysis</b>). One ratio is never enough: look at several before judging a firm.</p>
<div class="scroll"><table>
<thead><tr><th>Category</th><th>Question it answers</th><th>Ratios</th></tr></thead>
<tbody>
<tr><td>Liquidity</td><td>Can we make required payments (debts due within a year)?</td><td>Current, quick</td></tr>
<tr><td>Asset management</td><td>Is the amount of each asset right for our sales?</td><td>Inventory turnover, DSO, fixed assets turnover, total assets turnover</td></tr>
<tr><td>Debt management</td><td>Right mix of debt and equity? Can we cover interest?</td><td>Debt to total capital, TIE</td></tr>
<tr><td>Profitability</td><td>Do prices exceed costs, and are sales high enough?</td><td>Operating margin, profit margin, BEP, ROA, ROE, ROIC</td></tr>
<tr><td>Market value</td><td>Do investors like what they see?</td><td>P/E, M/B, EV/EBITDA</td></tr>
</tbody></table></div>

<h2>4.2 Liquidity</h2>
<div class="formula">Current ratio = Current assets ÷ Current liabilities<small>Allied: 1,000 ÷ 310 = 3.2× (industry 4.2×)</small></div>
<div class="formula">Quick (acid-test) ratio = (Current assets − Inventories) ÷ Current liabilities<small>Allied: (1,000 − 615) ÷ 310 = 1.2× (industry 2.2×)</small></div>
<ul>
<li>Inventory is the least liquid current asset, so the quick ratio is the stricter test.</li>
<li>A falling current ratio signals trouble (a struggling firm pays suppliers slowly and borrows from the bank, so current liabilities rise).</li>
<li>A ratio far <i>above</i> average is not automatically good: it can mean old inventory or receivables that may go bad.</li>
<li>Slide example, D'Leon 2022E: current 2.34× and quick 0.84× versus industry 2.70× and 1.00×. Liquidity is weak but improving.</li>
</ul>

<h2>4.3 Asset management</h2>
<div class="formula">Inventory turnover = Cost of goods sold ÷ Inventories<small>Allied: 2,100 ÷ 615 = 3.4× (industry 7.6×)</small></div>
<div class="formula">DSO = Receivables ÷ (Annual sales ÷ 365)<small>Allied: 375 ÷ (3,000 ÷ 365) = 45.6 days (industry 36; credit terms 30)</small></div>
<div class="formula">Fixed assets turnover = Sales ÷ Net fixed assets<small>Allied: 3,000 ÷ 1,000 = 3.0× (industry 2.8×)</small></div>
<div class="formula">Total assets turnover = Sales ÷ Total assets<small>Allied: 3,000 ÷ 2,000 = 1.5× (industry 1.8×)</small></div>
<div class="callout"><b>Heads up, slide vs. textbook:</b> your slide for D'Leon computes inventory turnover as Sales ÷ Inventories ($7,036 ÷ $1,716 = 4.10×). Your textbook uses Cost of goods sold ÷ Inventories because sales are at market prices and inventory is at cost. Problem 4-22 gives a gross profit margin so you can find COGS, which only makes sense with the textbook version. Ask your professor which one the exam expects.</div>
<ul>
<li>Low inventory turnover means too much inventory (possibly obsolete). High DSO means slow collections and bad-debt risk. Compare DSO to the firm's own credit terms too.</li>
<li>If fixed assets turnover is fine but total assets turnover is low, the excess is in current assets (receivables and inventory). That is D'Leon's pattern (slide 13).</li>
<li>Older firms can show a higher fixed assets turnover because their assets are heavily depreciated, not because they are more efficient.</li>
</ul>

<h2>4.4 Debt management</h2>
<div class="formula">Total debt to total capital = Total debt ÷ (Total debt + Total equity)<small>Total debt = notes payable + long-term debt only (no accounts payable or accruals). Allied: 860 ÷ 1,800 = 47.8% (industry 36.4%)</small></div>
<div class="formula">TIE = EBIT ÷ Interest charges<small>Allied: 278 ÷ 83 = 3.3× (industry 6.0×). Uses EBIT because interest is paid with pretax dollars.</small></div>
<ul>
<li><b>Leverage cuts both ways.</b> Firm U (no debt) vs. Firm L (50% debt at 10%): good year ROE 33.75% vs 60%; expected 11.25% vs 15%; bad year 0% vs −10%. Same EBIT, but fixed interest must be paid in bad years.</li>
<li>Creditors want low debt ratios (bigger equity cushion). Stockholders may want more leverage to magnify returns.</li>
<li>Slide example, D'Leon 2022E: debt ratio 700,000 ÷ (700,000 + 1,952,352) = 26.4% and TIE = 492.6 ÷ 70 = 7.0×, both better than industry (30.0%, 6.2×).</li>
</ul>

<h2>4.5 Profitability</h2>
<div class="formula">Operating margin = EBIT ÷ Sales &nbsp;|&nbsp; Profit margin = Net income ÷ Sales<small>Allied: 278 ÷ 3,000 = 9.3%; 146.3 ÷ 3,000 = 4.9%</small></div>
<div class="formula">Basic earning power (BEP) = EBIT ÷ Total assets<small>Allied: 278 ÷ 2,000 = 13.9%. Ignores taxes and debt, so it compares firms fairly.</small></div>
<div class="formula">ROA = Net income ÷ Total assets &nbsp;|&nbsp; ROE = Net income ÷ Common equity<small>Allied: 146.3 ÷ 2,000 = 7.3%; 146.3 ÷ 940 = 15.6%</small></div>
<div class="formula">ROIC = EBIT(1 − T) ÷ (Debt + Equity)<small>Allied: 208.5 ÷ 1,800 = 11.6%. Numerator is NOPAT, available to both stockholders and debtholders.</small></div>
<ul>
<li><b>Effect of more debt, assets held constant:</b> equity falls, interest rises, net income falls, <b>ROA falls</b>, and ROE <b>may go up or down</b> (both net income and equity shrink). ROIC and BEP do not change with the debt mix.</li>
<li>If BEP is constant and exceeds the interest rate on debt, financing extra assets with debt raises ROE.</li>
<li>Taxes, interest rates, and debt ratios do <u>not</u> change BEP, because BEP uses EBIT.</li>
</ul>

<h2>4.6 Market value</h2>
<div class="formula">P/E = Price per share ÷ Earnings per share<small>Allied: 23.06 ÷ 1.95 = 11.8× (industry 13.6×)</small></div>
<div class="formula">Book value per share = Common equity ÷ Shares &nbsp;|&nbsp; M/B = Market price ÷ Book value per share<small>Allied: 940 ÷ 75 = $12.53; 23.06 ÷ 12.53 = 1.8× (industry 2.6×)</small></div>
<div class="formula">EV = Market value of equity + Market value of debt + Other claims − Cash<small>Allied: 1,729.5 + 860 − 10 = $2,579.5M</small></div>
<div class="formula">EV/EBITDA = Enterprise value ÷ EBITDA<small>Allied: 2,579.5 ÷ 378 = 6.8× (industry 9.2×)</small></div>
<ul>
<li>Higher P/E and M/B generally mean strong growth prospects and low risk (high ROE, low risk).</li>
<li>M/B usually exceeds 1.0 because book values are historical cost and ignore inflation and goodwill.</li>
<li>EV subtracts cash so a cash-rich, inefficient firm doesn't look better than an efficient one. Use debt at book (par) value unless told otherwise.</li>
<li>Slide example, D'Leon 2022E: P/E = 12.17 ÷ 1.014 = 12.0×; M/B = 12.17 ÷ (1,952 ÷ 250) = 1.56×.</li>
</ul>

<h2>4.7 The DuPont equation</h2>
<div class="formula">ROE = Profit margin × Total assets turnover × Equity multiplier<small>= (NI ÷ Sales) × (Sales ÷ TA) × (TA ÷ Equity). Allied: 4.88% × 1.5 × 2.13 = 15.6%</small></div>
<div class="formula">ROA = Profit margin × Total assets turnover &nbsp;|&nbsp; ROE = ROA × Equity multiplier</div>
<div class="formula">Equity multiplier = Total assets ÷ Equity = 1 + Debt/Equity<small>Total liabilities ÷ Total assets = 1 − (1 ÷ Equity multiplier)</small></div>
<ul>
<li>PM = expense control; TATO = asset utilization; EM = debt utilization.</li>
<li>Allied: a below-average margin and turnover are partly offset by high leverage. Cutting debt to the industry multiplier (1.73) would drop ROE to 4.88% × 1.5 × 1.73 = 12.66%.</li>
<li>Slide example, D'Leon 2022E: 3.6% × 2.0 × 1.8 = 13.0%.</li>
</ul>
<h3>Exam-type questions from your slides</h3>
<ul>
<li><b>Equity multiplier of 4.0 → total liabilities ÷ assets?</b> 1 − 1/4 = <b>0.75</b> (answer d).</li>
<li><b>Merriam Co.: ROE 15%, liabilities/assets 0.35, TATO 2.8 → profit margin?</b> Equity/assets = 0.65, so EM = 1/0.65 = 1.5385. PM = 0.15 ÷ (2.8 × 1.5385) = <b>3.48%</b> (answer a).</li>
<li><b>Short-term creditor's best combination (current ratio, TIE, debt ratio)?</b> Your slide marks <b>c: 1.5, 1.5, 0.50</b>.</li>
</ul>

<h2>4.8 Limits of ROE and of ratio analysis</h2>
<ul>
<li><b>Three problems with ROE:</b> (1) it ignores <b>risk</b>; (2) it ignores the <b>amount of capital invested</b> (a 45% ROE on $1,000,000 can beat a 50% ROE on $50,000); (3) it can make managers <b>turn down profitable projects</b> that would dilute a high average ROE. EVA = Equity × (ROE − Cost of equity) fixes this by combining return, risk, and size.</li>
<li><b>Benchmarking:</b> compare against a chosen set of close competitors, not only an industry average. <b>Trend analysis:</b> plot a ratio over several years (Allied's ROE has fallen since 2018 while the industry stayed stable).</li>
<li><b>Limitations:</b> hard to use for conglomerates; average isn't necessarily good (aim at the leaders); seasonal factors; <b>window dressing</b>; inflation distorts book values; different accounting practices; a ratio can be hard to call good or bad; hard to tell if a firm is strong or weak overall.</li>
</ul>
`,

homework:[
{id:'p41',tag:`Assigned`,title:`Problem 4-1: Days sales outstanding`,
 given:`Baxley Brothers has a DSO of 23 days and annual sales of $3,650,000. Find accounts receivable (365-day year).`,
 parts:[{l:``,ask:`What is its accounts receivable balance?`,f:`DSO = Receivables ÷ (Annual sales ÷ 365), so Receivables = DSO × (Sales ÷ 365)`,
  rows:[[`Average sales per day = 3,650,000 ÷ 365`,`$10,000`],[`Receivables = 23 days × 10,000`,`$230,000`]],
  ans:[`Accounts receivable`,`$230,000`],calc:`3650000 ÷ 365 = 10000, then × 23 =`}]},

{id:'p42',tag:`Assigned`,title:`Problem 4-2: Debt to capital ratio`,
 given:`Kaye's Kitchenware has a market/book ratio of 1. Stock price $12; 4.8 million shares; total capital $110 million; financed only with debt and common equity.`,
 parts:[{l:``,ask:`What is its debt-to-capital ratio?`,f:`Total debt to total capital = Total debt ÷ (Total debt + Total equity). With M/B = 1, book equity equals market equity.`,
  rows:[[`Market value of equity = $12 × 4.8 million shares`,`$57.6M`],[`M/B = 1, so book equity = market equity`,`$57.6M`],[`Total capital (given)`,`$110.0M`],[`Total debt = capital − equity = 110 − 57.6`,`$52.4M`]],
  ans:[`Debt ÷ capital = 52.4 ÷ 110`,`47.64%`],calc:`12 × 4.8 = 57.6; 110 − 57.6 = 52.4; 52.4 ÷ 110 =`,
  note:`Check: equity share = 57.6 ÷ 110 = 52.36%, and 100% − 52.36% = 47.64%. ✔`}]},

{id:'p43',tag:`Assigned`,title:`Problem 4-3: DuPont analysis`,
 given:`Henderson's Hardware has ROA 11%, profit margin 6%, and ROE 23%.`,
 parts:[
  {l:`a`,ask:`What is its total assets turnover?`,f:`ROA = Profit margin × Total assets turnover, so TATO = ROA ÷ Profit margin`,
   rows:[[`ROA`,`11%`],[`Profit margin`,`6%`]],ans:[`Total assets turnover = 11 ÷ 6`,`1.83×`],calc:`0.11 ÷ 0.06 = 1.8333`},
  {l:`b`,ask:`What is its equity multiplier?`,f:`ROE = ROA × Equity multiplier, so EM = ROE ÷ ROA`,
   rows:[[`ROE`,`23%`],[`ROA`,`11%`]],ans:[`Equity multiplier = 23 ÷ 11`,`2.09×`],calc:`0.23 ÷ 0.11 = 2.0909`,
   note:`Check: 6% × 1.8333 × 2.0909 = 23.0%. ✔ (Full DuPont: ROE = PM × TATO × EM.)`}]},

{id:'p44',tag:`Assigned`,title:`Problem 4-4: Market/book and EV/EBITDA ratios`,
 given:`Edelman Engines: total assets $17 billion (cash $100 million); current liabilities $1.7 billion (notes payable $1 billion); long-term debt $10.2 billion; common equity $5.1 billion; 300 million shares at $20; EBITDA $1.368 billion. Debt is priced at par.`,
 parts:[
  {l:`a`,ask:`What is the market/book ratio?`,f:`Book value per share = Common equity ÷ Shares; M/B = Market price ÷ Book value per share`,
   rows:[[`Book value per share = $5.1 billion ÷ 300 million`,`$17.00`],[`Market price per share`,`$20.00`]],ans:[`M/B = 20 ÷ 17`,`1.18×`],calc:`5100 ÷ 300 = 17; 20 ÷ 17 =`},
  {l:`b`,ask:`What is the EV/EBITDA ratio?`,f:`EV = Market value of equity + Market value of debt + Other claims − Cash; EV/EBITDA = EV ÷ EBITDA`,
   rows:[[`Market value of equity = $20 × 300 million`,`$6.0B`],[`Total debt = Notes payable + Long-term debt = 1.0 + 10.2`,`$11.2B`],[`− Cash and equivalents`,`$0.1B`],[`EV = 6.0 + 11.2 − 0.1`,`$17.1B`],[`EBITDA`,`$1.368B`]],
   ans:[`EV/EBITDA = 17.1 ÷ 1.368`,`12.50×`],calc:`6 + 11.2 − 0.1 = 17.1; 17.1 ÷ 1.368 =`,
   note:`Only interest-bearing debt counts. Of the $1.7B of current liabilities, just the $1B of notes payable is debt; the other $0.7B is operating liabilities.`}]},

{id:'p45',tag:`Assigned`,title:`Problem 4-5: Price/earnings ratio`,
 given:`EPS $2.40; book value per share $21.84; market/book ratio 2.7×.`,
 parts:[{l:``,ask:`What is its P/E ratio?`,f:`M/B = Price ÷ Book value per share, so Price = M/B × BVPS; then P/E = Price ÷ EPS`,
  rows:[[`Price = 2.7 × $21.84`,`$58.968`],[`EPS`,`$2.40`]],ans:[`P/E = 58.968 ÷ 2.40`,`24.57×`],calc:`2.7 × 21.84 = 58.968; 58.968 ÷ 2.4 =`}]},

{id:'p414',tag:`Assigned`,title:`Problem 4-14: Return on equity`,
 given:`Pacific Packaging's new plan: debt-to-capital 40%, interest $561,000, total assets = total invested capital, EBIT $1,870,000, sales $17,000,000, total assets turnover 2.1, tax rate 25%. (Last year's 5% ROE is not needed.)`,
 parts:[{l:``,ask:`What will ROE be if the changes are made?`,f:`TA = Sales ÷ TATO; Equity = (1 − debt ratio) × Capital; NI = (EBIT − Interest)(1 − T); ROE = NI ÷ Equity`,
  rows:[[`Total assets = 17,000,000 ÷ 2.1`,`$8,095,238`],[`Equity = 60% × 8,095,238`,`$4,857,143`],[`EBT = 1,870,000 − 561,000`,`$1,309,000`],[`Net income = 1,309,000 × 0.75`,`$981,750`]],
  ans:[`ROE = 981,750 ÷ 4,857,143`,`20.21%`],calc:`17000000 ÷ 2.1 = 8095238.1; × 0.6 = 4857142.9; 1309000 × 0.75 = 981750; 981750 ÷ 4857142.9 =`,
  note:`The debt amount (40% × assets = $3,238,095) is not needed once you know the interest charge, but it confirms equity is the other 60%.`}]},

{id:'p415',tag:`Extra practice`,title:`Problem 4-15: ROE and quick ratio`,
 given:`Lloyd Inc.: sales $200,000; net income $15,000. Balance sheet: cash $10,000; receivables $50,000; inventories $150,000 (current assets $210,000); net fixed assets $90,000; total assets $300,000. Accounts payable $30,000; notes payable $20,000 (current liabilities $50,000); long-term debt $50,000; common equity $200,000. Inventories are cut until the current ratio is 2.5×, and the funds repurchase stock at book value.`,
 parts:[
  {l:`a`,ask:`By how much will ROE change?`,f:`Current ratio = Current assets ÷ Current liabilities; ROE = Net income ÷ Equity`,
   rows:[[`Current ratio now = 210,000 ÷ 50,000`,`4.2×`],[`Target current assets = 2.5 × 50,000`,`$125,000`],[`Inventory cut = 210,000 − 125,000`,`$85,000`],[`New equity = 200,000 − 85,000`,`$115,000`],[`Old ROE = 15,000 ÷ 200,000`,`7.50%`],[`New ROE = 15,000 ÷ 115,000`,`13.04%`]],
   ans:[`Change in ROE`,`+5.54 points`],calc:`15000 ÷ 115000 = 0.13043; − 0.075 = 0.05543`},
  {l:`b`,ask:`What is the new quick ratio?`,f:`Quick ratio = (Current assets − Inventories) ÷ Current liabilities`,
   rows:[[`New inventories = 150,000 − 85,000`,`$65,000`],[`(125,000 − 65,000) ÷ 50,000`,`60,000 ÷ 50,000`]],ans:[`New quick ratio`,`1.20×`],
   note:`The quick ratio doesn't change (it was already (210,000 − 150,000) ÷ 50,000 = 1.2×) because inventory is excluded from it.`}]},

{id:'p416',tag:`Extra practice`,title:`Problem 4-16: Return on equity with and without debt`,
 given:`Commonwealth Construction needs $3 million of assets, expects BEP of 35%, and could finance up to 30% with 8% debt. Tax rate 25%; no preferred stock.`,
 parts:[
  {l:``,ask:`Difference between ROE with 30% debt and ROE with all equity?`,f:`BEP = EBIT ÷ Total assets, so EBIT = BEP × Assets. NI = (EBIT − Interest)(1 − T). ROE = NI ÷ Equity.`,
   rows:[[`EBIT = 0.35 × 3,000,000`,`$1,050,000`],[`With debt: debt = 30% × 3,000,000; equity = 70%`,`$900,000 / $2,100,000`],[`Interest = 8% × 900,000`,`$72,000`],[`NI = (1,050,000 − 72,000)(0.75)`,`$733,500`],[`ROE with debt = 733,500 ÷ 2,100,000`,`34.93%`],[`All equity: NI = 1,050,000 × 0.75`,`$787,500`],[`ROE all equity = 787,500 ÷ 3,000,000`,`26.25%`]],
   ans:[`Difference = 34.93% − 26.25%`,`8.68 points`],calc:`733500 ÷ 2100000 = 0.34929; 787500 ÷ 3000000 = 0.2625`,
   note:`Debt raises ROE because BEP (35%) is far above the cost of debt (8%).`}]},

{id:'p419',tag:`Extra practice`,title:`Problem 4-19: Current ratio`,
 given:`Stewart Company: current assets $2,392,500; current liabilities $1,076,625; initial inventory $526,350. It raises notes payable and uses the money to buy inventory. How much can notes payable increase before the current ratio falls below 2.0?`,
 parts:[{l:``,ask:`Maximum increase in notes payable?`,f:`Current ratio = CA ÷ CL. Let x = new notes payable = added inventory, so CA and CL both rise by x.`,
  rows:[[`(2,392,500 + x) ÷ (1,076,625 + x) = 2.0`,``],[`2,392,500 + x = 2(1,076,625) + 2x`,``],[`x = 2,392,500 − 2,153,250`,`$239,250`]],
  ans:[`Maximum increase in notes payable`,`$239,250`],calc:`2 × 1076625 = 2153250; 2392500 − 2153250 =`,
  note:`Check: 2,631,750 ÷ 1,315,875 = 2.00. ✔ The initial inventory figure is not needed.`}]},

{id:'p420',tag:`Extra practice`,title:`Problem 4-20: DSO and accounts receivable`,
 given:`Ingraham Inc.: receivables $205,000; DSO 71 days. It wants DSO of 20 days, and average sales will fall 15%. (365-day year.)`,
 parts:[{l:``,ask:`What will accounts receivable be after the change?`,f:`DSO = AR ÷ (Sales ÷ 365), so Sales = AR × 365 ÷ DSO, and new AR = new DSO × (new sales ÷ 365)`,
  rows:[[`Current annual sales = 205,000 × 365 ÷ 71`,`$1,053,873`],[`New sales = 0.85 × 1,053,873`,`$895,792`],[`New average sales per day = 895,792 ÷ 365`,`$2,454.22`],[`New AR = 20 × 2,454.22`,`$49,085`]],
  ans:[`Accounts receivable`,`≈ $49,085`],calc:`205000 × 365 ÷ 71 = 1053873; × 0.85 = 895792; ÷ 365 × 20 =`}]},

{id:'p421',tag:`Extra practice`,title:`Problem 4-21: P/E and stock price`,
 given:`Ferrell Inc.: net income $8 million; 540,000 shares; price $21. In 1 year: net income $13.2 million and 621,000 shares. P/E stays at today's level.`,
 parts:[{l:``,ask:`What will the stock price be 1 year from now?`,f:`P/E = Price ÷ EPS; Price = P/E × EPS`,
  rows:[[`EPS today = 8,000,000 ÷ 540,000`,`$14.8148`],[`P/E today = 21 ÷ 14.8148`,`1.4175×`],[`EPS in 1 year = 13,200,000 ÷ 621,000`,`$21.2560`],[`Price = 1.4175 × 21.2560`,`$30.13`]],
  ans:[`Stock price in 1 year`,`$30.13`],calc:`8000000 ÷ 540000 = 14.8148; 21 ÷ 14.8148 = 1.4175; 13200000 ÷ 621000 = 21.256; × 1.4175 =`,
  note:`Shortcut: new price = 21 × (21.2560 ÷ 14.8148) = $30.13.`}]},

{id:'p422',tag:`Assigned`,title:`Problem 4-22: Balance sheet analysis`,
 given:`Total assets $300,000 (turnover 1.5×); DSO 36.5 days; inventory turnover 3.75×; fixed assets turnover 3.0×; current ratio 2.0×; gross profit margin 25%. Long-term debt $60,000; retained earnings $97,500. Fill in cash, A/R, inventories, fixed assets, current liabilities, common stock, sales, and COGS.`,
 parts:[
  {l:`a`,ask:`Sales`,f:`Total assets turnover = Sales ÷ Total assets`,rows:[[`Sales = 1.5 × 300,000`,``]],ans:[`Sales`,`$450,000`]},
  {l:`b`,ask:`Accounts receivable`,f:`DSO = AR ÷ (Sales ÷ 365)`,rows:[[`Sales per day = 450,000 ÷ 365`,`$1,232.88`],[`AR = 36.5 × 1,232.88`,``]],ans:[`Accounts receivable`,`$45,000`],calc:`450000 ÷ 365 × 36.5 =`},
  {l:`c`,ask:`Cost of goods sold`,f:`Gross margin = (Sales − COGS) ÷ Sales, so COGS = (1 − 0.25) × Sales`,rows:[[`COGS = 0.75 × 450,000`,``]],ans:[`COGS`,`$337,500`]},
  {l:`d`,ask:`Inventories`,f:`Inventory turnover = COGS ÷ Inventories`,rows:[[`Inventories = 337,500 ÷ 3.75`,``]],ans:[`Inventories`,`$90,000`]},
  {l:`e`,ask:`Fixed assets`,f:`Fixed assets turnover = Sales ÷ Fixed assets`,rows:[[`Fixed assets = 450,000 ÷ 3.0`,``]],ans:[`Fixed assets`,`$150,000`]},
  {l:`f`,ask:`Cash`,f:`Total assets = Cash + A/R + Inventories + Fixed assets`,rows:[[`Cash = 300,000 − 45,000 − 90,000 − 150,000`,``]],ans:[`Cash`,`$15,000`]},
  {l:`g`,ask:`Current liabilities`,f:`Current ratio = Current assets ÷ Current liabilities`,rows:[[`Current assets = 15,000 + 45,000 + 90,000`,`$150,000`],[`Current liabilities = 150,000 ÷ 2.0`,``]],ans:[`Current liabilities`,`$75,000`]},
  {l:`h`,ask:`Common stock`,f:`Total liabilities and equity = Total assets (balance sheet identity)`,rows:[[`Common stock = 300,000 − 75,000 − 60,000 − 97,500`,``]],ans:[`Common stock`,`$67,500`],
   note:`Completed balance sheet: Cash 15,000 + A/R 45,000 + Inventories 90,000 + Fixed assets 150,000 = 300,000. Current liabilities 75,000 + Long-term debt 60,000 + Common stock 67,500 + Retained earnings 97,500 = 300,000. ✔`}]},

{id:'pbarry',tag:`Extra practice`,title:`Barry Computer ratio table (from the Challenging Problems 20–24 exhibit)`,
 given:`Dollars in thousands. Current assets 655,000 (cash 77,500; receivables 336,000; inventories 241,500); net fixed assets 292,500; total assets 947,500. Accounts payable 129,000; other current liabilities 117,000; notes payable 84,000 (current liabilities 330,000); long-term debt 256,500; common equity 361,000 (36,100 shares). Sales 1,607,500; COGS 1,351,000; depreciation 41,500; EBIT 70,000; interest 21,000; EBT 49,000; taxes (25%) 12,250; net income 36,750; EPS $1.018; price $12.00. The problem number and exact wording were not visible in your screenshot, so this fills in the whole ratio table.`,
 parts:[
  {l:``,ask:`Current ratio`,f:`Current assets ÷ Current liabilities`,rows:[[`655,000 ÷ 330,000`,``]],ans:[`Current ratio (industry 2.0×)`,`1.98×`]},
  {l:``,ask:`Quick ratio`,f:`(Current assets − Inventories) ÷ Current liabilities`,rows:[[`(655,000 − 241,500) ÷ 330,000`,``]],ans:[`Quick ratio (industry 1.3×)`,`1.25×`]},
  {l:``,ask:`Days sales outstanding`,f:`Receivables ÷ (Sales ÷ 365)`,rows:[[`Sales per day = 1,607,500 ÷ 365`,`4,404.11`],[`336,000 ÷ 4,404.11`,``]],ans:[`DSO (industry 35 days)`,`76.3 days`]},
  {l:``,ask:`Inventory turnover`,f:`Cost of goods sold ÷ Inventories`,rows:[[`1,351,000 ÷ 241,500`,``]],ans:[`Inventory turnover (industry 5.7×)`,`5.59×`]},
  {l:``,ask:`Total assets turnover`,f:`Sales ÷ Total assets`,rows:[[`1,607,500 ÷ 947,500`,``]],ans:[`TA turnover (industry 3.0×)`,`1.70×`]},
  {l:``,ask:`Profit margin`,f:`Net income ÷ Sales`,rows:[[`36,750 ÷ 1,607,500`,``]],ans:[`Profit margin (industry 1.6%)`,`2.29%`]},
  {l:``,ask:`ROA`,f:`Net income ÷ Total assets`,rows:[[`36,750 ÷ 947,500`,``]],ans:[`ROA (industry 4.8%)`,`3.88%`]},
  {l:``,ask:`ROE`,f:`Net income ÷ Common equity`,rows:[[`36,750 ÷ 361,000`,``]],ans:[`ROE (industry 12.1%)`,`10.18%`]},
  {l:``,ask:`ROIC`,f:`EBIT(1 − T) ÷ (Debt + Equity)`,rows:[[`NOPAT = 70,000 × 0.75`,`52,500`],[`Debt + equity = 84,000 + 256,500 + 361,000`,`701,500`],[`52,500 ÷ 701,500`,``]],ans:[`ROIC (industry 9.4%)`,`7.48%`]},
  {l:``,ask:`Times interest earned`,f:`EBIT ÷ Interest`,rows:[[`70,000 ÷ 21,000`,``]],ans:[`TIE (industry 3.5×)`,`3.33×`]},
  {l:``,ask:`Debt to total capital`,f:`Total debt ÷ (Total debt + Equity)`,rows:[[`Total debt = 84,000 + 256,500`,`340,500`],[`340,500 ÷ 701,500`,``]],ans:[`Debt/total capital (industry 47.0%)`,`48.54%`]},
  {l:``,ask:`Market/book`,f:`Price ÷ (Common equity ÷ Shares)`,rows:[[`Book value per share = 361,000 ÷ 36,100`,`$10.00`],[`12.00 ÷ 10.00`,``]],ans:[`M/B (industry 4.22×)`,`1.20×`]},
  {l:``,ask:`P/E`,f:`Price ÷ EPS`,rows:[[`12.00 ÷ 1.018`,``]],ans:[`P/E (industry 13.27×)`,`11.79×`]},
  {l:``,ask:`EV/EBITDA`,f:`EV = Market equity + Debt − Cash; EBITDA = EBIT + Depreciation`,rows:[[`Market equity = 12 × 36,100`,`433,200`],[`EV = 433,200 + 340,500 − 77,500`,`696,200`],[`EBITDA = 70,000 + 41,500`,`111,500`],[`696,200 ÷ 111,500`,``]],ans:[`EV/EBITDA (industry 9.14×)`,`6.24×`]}
 ]}
],

homeworkConcept:[
{id:'q417',title:`Question 4-17: Which statement is most correct? (Conceptual, return on equity)`,
 body:`<p><b>Answer: (a).</b> BEP = EBIT ÷ Total assets, so it ignores taxes and financing.</p>
 <ul>
 <li><b>a. True.</b> If every dollar of assets earns a BEP above the interest rate on debt, then each extra dollar financed with debt earns more than it costs, and the surplus goes to stockholders, so ROE rises. (Problem 4-16: BEP 35% vs. 8% debt cost lifted ROE from 26.25% to 34.93%.)</li>
 <li><b>b. False.</b> BEP uses EBIT, which is before taxes, so the tax rate does not affect it.</li>
 <li><b>c. False.</b> Interest is below EBIT, so the interest rate does not affect BEP.</li>
 <li><b>d. False.</b> The debt ratio changes interest and equity, not EBIT or total assets, so BEP is unchanged.</li>
 <li><b>e. False.</b> Statement a is true, and b, c, and d are false.</li>
 </ul>`},
{id:`qslide16`,title:`Slide 16 exam question: short-term creditor`,
 body:`<p>As a short-term creditor you want to be repaid soon, so you want strong liquidity and interest coverage with modest debt. Your slide marks <b>c (current ratio 1.5, TIE 1.5, debt ratio 0.50)</b>.</p>
 <ul>
 <li><b>a (0.5, 0.5, 0.33):</b> a current ratio of 0.5 means too few current assets to pay current bills.</li>
 <li><b>b (1.0, 1.0, 0.50):</b> just barely covers current liabilities and interest.</li>
 <li><b>c (1.5, 1.5, 0.50):</b> adequate liquidity and coverage with a moderate debt ratio. The best balance.</li>
 <li><b>d (2.0, 1.0, 0.67):</b> a good current ratio, but TIE of only 1.0 and a high debt ratio (0.67).</li>
 </ul>`},
{id:`qslide29`,title:`Slide 29 exam question: equity multiplier of 4.0`,
 body:`<p>Equity multiplier = total assets ÷ equity = 4.0, so equity ÷ assets = 1 ÷ 4 = 0.25. Liabilities are the rest of the assets: total liabilities ÷ total assets = 1 − 0.25 = <b>0.75 (answer d)</b>. General rule: liabilities ÷ assets = 1 − 1/EM.</p>`},
{id:`qslide30`,title:`Slide 30 exam question: Merriam Company`,
 body:`<p>ROE = PM × TATO × EM. Liabilities/assets = 0.35, so equity/assets = 0.65 and EM = 1 ÷ 0.65 = 1.5385. Then PM = ROE ÷ (TATO × EM) = 0.15 ÷ (2.8 × 1.5385) = 0.15 ÷ 4.3077 = <b>3.48% (answer a)</b>.</p>`},
{id:'qbarry',title:`Barry Computer: what the ratios say`,
 body:`<p>Compared with the industry averages:</p>
 <ul>
 <li><b>Liquidity:</b> current (1.98× vs 2.0×) is about average; quick (1.25× vs 1.3×) is slightly low.</li>
 <li><b>Asset management:</b> weak. DSO is 76 days vs 35, so collections are very slow, and total assets turnover is 1.70× vs 3.0×. Inventory turnover (5.59× vs 5.7×) is about average.</li>
 <li><b>Debt:</b> about average (48.5% vs 47.0%), but TIE is 3.33× vs 3.5×.</li>
 <li><b>Profitability:</b> profit margin (2.29% vs 1.6%) is better than average, but low turnover drags ROA (3.88% vs 4.8%), ROE (10.18% vs 12.1%), and ROIC (7.48% vs 9.4%) below average.</li>
 <li><b>Market value:</b> well below the industry (M/B 1.20× vs 4.22×; P/E 11.79× vs 13.27×; EV/EBITDA 6.24× vs 9.14×), so investors see weaker prospects.</li>
 <li><b>Biggest fix:</b> speed up receivables and use assets harder (DSO and total assets turnover).</li>
 </ul>`}
],
st1:[],
st1Title:``,
homeworkHint:`Problems 4-6 to 4-13 (assigned) were not in the screenshots. Send them and they will be added here.`,

cards:[
 {k:`term`,f:`Ratio analysis`,b:`Using relationships between financial statement numbers to evaluate a firm's condition and performance, against peers and against its own past.`},
 {k:`term`,f:`Five categories of ratios`,b:`Liquidity (can we pay?), asset management (right amount of assets?), debt management (right debt mix?), profitability (do prices beat costs?), market value (do investors like it?).`},
 {k:`term`,f:`Liquidity ratios`,b:`Show ability to pay debts maturing within a year: current ratio and quick ratio.`},
 {k:`term`,f:`Trend analysis vs. benchmarking`,b:`Trend: plot one firm's ratio over several years. Benchmarking: compare to a chosen set of close competitors, not just an industry average.`},
 {k:`term`,f:`Why is the quick ratio stricter than the current ratio?`,b:`It removes inventories, the least liquid current asset and the one most likely to lose value in a liquidation.`},
 {k:`term`,f:`Why use COGS in inventory turnover?`,b:`Sales are at market prices and inventory is at cost, so using sales would overstate turnover. (Your slides use Sales; ask your professor which the exam expects.)`},
 {k:`term`,f:`High DSO means...`,b:`Customers pay slowly, which ties up cash and raises bad-debt risk. Compare to the firm's own credit terms as well as the industry.`},
 {k:`term`,f:`FA turnover OK but TA turnover low`,b:`The excess assets are in current assets (receivables and inventory), as with D'Leon.`},
 {k:`term`,f:`What counts as "total debt" in debt to capital?`,b:`Notes payable + long-term debt only. Not accounts payable or accruals.`},
 {k:`term`,f:`Why does TIE use EBIT?`,b:`Interest is paid with pretax dollars, so taxes don't affect the ability to pay interest.`},
 {k:`term`,f:`Effects of more debt (assets constant)`,b:`Equity down, interest up, net income down, ROA down, ROE may go up or down. ROIC and BEP unchanged.`},
 {k:`term`,f:`Financial leverage`,b:`Using debt. Raises ROE when assets earn more than the interest rate, but raises risk (Firm L's ROE was −10% in the bad case).`},
 {k:`term`,f:`Why use BEP to compare firms?`,b:`It uses EBIT ÷ total assets, ignoring taxes and debt, so firms with different financing can be compared directly.`},
 {k:`term`,f:`ROIC vs. ROA`,b:`ROIC uses NOPAT over total invested capital (debt + equity); ROA uses net income over total assets. NOPAT is available to both stockholders and debtholders.`},
 {k:`term`,f:`High P/E and M/B suggest...`,b:`Strong growth prospects and low risk (high ROE, low risk). Low values suggest risky or slow-growing firms.`},
 {k:`term`,f:`Why is M/B usually above 1.0?`,b:`Book values are historical cost and don't reflect inflation or goodwill.`},
 {k:`term`,f:`Why does EV subtract cash?`,b:`So a cash-rich, inefficient firm doesn't look better than an efficient peer with less cash.`},
 {k:`term`,f:`DuPont: what does each term measure?`,b:`Profit margin = expense control. Total assets turnover = asset utilization. Equity multiplier = debt utilization.`},
 {k:`term`,f:`Three problems with ROE`,b:`It ignores risk, ignores the amount of capital invested, and can make managers reject profitable projects that would dilute a high average ROE.`},
 {k:`term`,f:`Limits of ratio analysis`,b:`Conglomerates, average isn't always good, seasonality, window dressing, inflation/book values, different accounting, hard to call good or bad.`},
 {k:`term`,f:`Window dressing`,b:`Techniques that make financial statements and ratios look better than reality.`},
 {k:`formula`,f:`Current ratio`,b:`Current assets ÷ Current liabilities`},
 {k:`formula`,f:`Quick ratio`,b:`(Current assets − Inventories) ÷ Current liabilities`},
 {k:`formula`,f:`Inventory turnover`,b:`Cost of goods sold ÷ Inventories (slides: Sales ÷ Inventories)`},
 {k:`formula`,f:`DSO`,b:`Receivables ÷ (Annual sales ÷ 365). To solve for receivables: DSO × Sales ÷ 365.`},
 {k:`formula`,f:`Fixed assets turnover`,b:`Sales ÷ Net fixed assets`},
 {k:`formula`,f:`Total assets turnover`,b:`Sales ÷ Total assets`},
 {k:`formula`,f:`Total debt to total capital`,b:`Total debt ÷ (Total debt + Total equity). Total debt = notes payable + long-term debt.`},
 {k:`formula`,f:`TIE`,b:`EBIT ÷ Interest charges`},
 {k:`formula`,f:`Operating margin`,b:`EBIT ÷ Sales`},
 {k:`formula`,f:`Profit margin`,b:`Net income ÷ Sales`},
 {k:`formula`,f:`BEP`,b:`EBIT ÷ Total assets`},
 {k:`formula`,f:`ROA`,b:`Net income ÷ Total assets`},
 {k:`formula`,f:`ROE`,b:`Net income ÷ Common equity`},
 {k:`formula`,f:`ROIC`,b:`EBIT(1 − T) ÷ (Debt + Equity)`},
 {k:`formula`,f:`P/E`,b:`Price per share ÷ Earnings per share`},
 {k:`formula`,f:`Book value per share and M/B`,b:`BVPS = Common equity ÷ Shares. M/B = Market price ÷ BVPS. To find price: M/B × BVPS.`},
 {k:`formula`,f:`Enterprise value`,b:`Market value of equity + Market value of debt + Other claims − Cash and equivalents`},
 {k:`formula`,f:`EV/EBITDA`,b:`Enterprise value ÷ EBITDA`},
 {k:`formula`,f:`DuPont equation`,b:`ROE = (NI ÷ Sales) × (Sales ÷ TA) × (TA ÷ Equity) = ROA × Equity multiplier`},
 {k:`formula`,f:`Equity multiplier`,b:`Total assets ÷ Equity = 1 + Debt/Equity. Liabilities ÷ Assets = 1 − 1/EM.`},
 {k:`formula`,f:`ROE and EVA connection`,b:`EVA = Equity × (ROE − Cost of equity): depends on return, risk, and size.`},
 {k:`formula`,f:`Working backward from ROA, PM, ROE`,b:`TATO = ROA ÷ PM. EM = ROE ÷ ROA.`}
],

quiz:[
 {q:`Which category of ratios answers "Can we make required payments?"`,o:[`Asset management`,`Liquidity`,`Profitability`,`Market value`],a:1,e:`Liquidity ratios (current and quick) show ability to pay debts due within a year.`},
 {q:`Receivables are $300 and annual sales are $3,650. What is DSO (365-day year)?`,o:[`10 days`,`30 days`,`36.5 days`,`12.2 days`],a:1,e:`DSO = 300 ÷ (3,650 ÷ 365) = 300 ÷ 10 = 30 days.`},
 {q:`COGS is $800, sales are $1,000, and inventories are $200. Using the textbook formula, what is inventory turnover?`,o:[`4.0×`,`5.0×`,`0.25×`,`0.8×`],a:0,e:`Inventory turnover = COGS ÷ Inventories = 800 ÷ 200 = 4.0×. (5.0× would use sales.)`},
 {q:`EBIT is $500 and interest is $100. What is TIE?`,o:[`0.2×`,`4.0×`,`5.0×`,`6.0×`],a:2,e:`TIE = EBIT ÷ Interest = 500 ÷ 100 = 5.0×.`},
 {q:`Notes payable $100, long-term debt $400, accounts payable $200, common equity $500. What is total debt to total capital?`,o:[`50.0%`,`58.3%`,`41.7%`,`80.0%`],a:0,e:`Total debt = 100 + 400 = 500 (accounts payable is excluded). Capital = 500 + 500 = 1,000. Ratio = 50%.`},
 {q:`Profit margin 5%, total assets turnover 2.0×, equity multiplier 1.5×. What is ROE?`,o:[`10%`,`15%`,`7.5%`,`17.5%`],a:1,e:`ROE = 5% × 2.0 × 1.5 = 15%. (ROA = 5% × 2.0 = 10%.)`},
 {q:`A firm has an equity multiplier of 4.0. What is total liabilities ÷ total assets?`,o:[`4.00`,`3.00`,`1.00`,`0.75`],a:3,e:`Equity ÷ assets = 1/4 = 0.25, so liabilities ÷ assets = 1 − 0.25 = 0.75.`},
 {q:`ROE is 15%, liabilities/assets is 0.35, and total assets turnover is 2.8. What is the profit margin?`,o:[`3.48%`,`5.42%`,`6.96%`,`2.45%`],a:0,e:`Equity/assets = 0.65, so EM = 1.5385. PM = 0.15 ÷ (2.8 × 1.5385) = 3.48%.`},
 {q:`A firm has ROA of 8% and ROE of 20%. What is its equity multiplier?`,o:[`0.4×`,`1.6×`,`2.5×`,`12×`],a:2,e:`ROE = ROA × EM, so EM = 20% ÷ 8% = 2.5×.`},
 {q:`Price is $36 and EPS is $3. What is the P/E ratio?`,o:[`0.083×`,`12.0×`,`108×`,`33×`],a:1,e:`P/E = 36 ÷ 3 = 12.0×.`},
 {q:`Market price $45; common equity $300M; 10 million shares. What is M/B?`,o:[`0.67×`,`1.0×`,`1.5×`,`15×`],a:2,e:`BVPS = 300 ÷ 10 = $30. M/B = 45 ÷ 30 = 1.5×.`},
 {q:`Market value of equity $600, debt $300 (at par), cash $50, EBITDA $100. What is EV/EBITDA?`,o:[`9.0×`,`8.5×`,`9.5×`,`7.5×`],a:1,e:`EV = 600 + 300 − 50 = 850. EV/EBITDA = 850 ÷ 100 = 8.5×.`},
 {q:`If a firm's BEP is constant and exceeds its interest rate on debt, what happens when it adds assets financed with debt?`,o:[`ROE falls`,`ROE rises`,`BEP rises`,`Nothing changes`],a:1,e:`Each new dollar earns more than it costs, so the surplus goes to stockholders and ROE rises. BEP uses EBIT, so financing doesn't change it.`},
 {q:`Which is NOT one of the textbook's problems with relying on ROE?`,o:[`It ignores risk`,`It ignores the amount of capital invested`,`It can cause managers to reject profitable projects`,`It cannot be calculated from the income statement`],a:3,e:`ROE is easy to calculate; the problems are risk, size of capital, and discouraging good projects.`}
],

video:{
 id:`ci39OSFps4A`,
 caution:`The instructor's ratio problem (June Enterprises, from 39:29) is a good walk-through, but his definitions differ slightly from your textbook in places. His "total debt ratio" is total liabilities ÷ total assets (your textbook uses total debt ÷ total capital), and he uses a total-liabilities approach for leverage. His inventory turnover (COGS ÷ inventory), DSO, TIE, profit margin, ROA, ROE, P/E, M/B and DuPont match your textbook. Use the video for the idea, then use your textbook's formula for answers.`,
 rows:[
  {hw:`Problem 4-1 and 4-20 (DSO)`,why:`Receivables turnover, then 365 ÷ turnover. Same idea as AR ÷ (Sales ÷ 365).`,
   clips:[[ts('53:55'),'53:55–54:30','Receivables turnover and the average days to collect, with the interpretation']]},
  {hw:`Problem 4-2 (debt to capital)`,why:`Leverage ratios, plus the algebra for finding equity when a ratio and a total are given.`,
   clips:[[ts('46:30'),'46:30–47:58','Total liabilities ÷ total assets and liabilities ÷ equity'],[ts('48:56'),'48:56–49:34','Long-term debt ÷ (long-term debt + equity), the closest to your debt-to-capital ratio'],[ts('2:00:16'),'2:00:16–2:01:50','Solving for equity when you know debt + equity and a debt ratio']]},
  {hw:`Problem 4-3 and 4-14 (DuPont and ROE)`,why:`Breaks ROE into profit margin × asset turnover × equity multiplier.`,
   clips:[[ts('1:01:21'),'1:01:21–1:03:39','The DuPont identity and what each piece says'],[ts('47:58'),'47:58–48:56','Equity multiplier, and debt/equity = equity multiplier − 1'],[ts('58:53'),'58:53–59:25','ROE = net income ÷ equity']]},
  {hw:`Problems 4-4, 4-5, 4-21 (P/E, M/B)`,why:`P/E and market/book with a worked example, including book value per share.`,
   clips:[[ts('59:25'),'59:25–1:00:36','P/E and how to read a high or low P/E'],[ts('1:00:36'),'1:00:36–1:01:21','Book value per share and market/book']]},
  {hw:`Problems 4-15 and 4-19 (current and quick ratio)`,why:`Current and quick ratio with interpretation.`,
   clips:[[ts('41:00'),'41:00–41:49','Current ratio'],[ts('41:49'),'41:49–42:32','Quick (acid-test) ratio']]},
  {hw:`Problem 4-22 (turnover ratios and balance sheet puzzle)`,why:`Turnover ratios, plus the same "puzzle-solving" approach of working from ratios back to dollar amounts.`,
   clips:[[ts('52:39'),'52:39–53:17','Inventory turnover'],[ts('55:33'),'55:33–56:36','Fixed assets and total assets turnover'],[ts('1:57:55'),'1:57:55–1:59:43','Using profit margin and capital intensity to back into sales and assets']]},
  {hw:`Barry Computer ratio table (practice)`,why:`The whole ratio walk-through, ending with a good comparison against a competitor.`,
   clips:[[ts('39:29'),'39:29–40:58','Why never judge one ratio alone'],[ts('40:58'),'40:58–1:04:09','Full ratio problem: liquidity, leverage, turnover, profitability, market value, DuPont']]},
 ],
 missing:`Not covered in the video: BEP, ROIC, EV/EBITDA (Problem 4-4b), and the conceptual material (Question 4-17, limits of ROE and ratio analysis). Use the Summary and Homework tabs for those.`,
 later:[
  [ts('2:04:07'),'2:04:07','Time value of money: intro and the future value formula (Chapter 5)'],
  [ts('2:13:26'),'2:13:26','Future value of a lump sum with the BA II Plus keystrokes (Chapter 5)'],
  [ts('2:19:02'),'2:19:02','Solving for the interest rate with the calculator; solving for N starts at 2:30:06 (Chapter 5)'],
  [ts('2:44:42'),'2:44:42','Present value of an annuity, formula and calculator (Chapter 5)']
 ]
}
});


/* ============================================================
   CHAPTER 5
   ============================================================ */
CHAPTERS.push({
id:'ch5',
title:`Chapter 5: Time Value of Money`,
calcNote:`<b>Calculator note:</b> Chapter 5 is where the financial calculator matters. Each solution shows the formula (so you can do it by hand) and then the calculator inputs. Keys are N, I/YR (I/Y on a BA II Plus), PV, PMT, FV. Enter the interest rate as a whole-number percent (5, not 0.05). Enter money you pay out as negative and money you receive as positive. Set 1 payment per year and END mode first (see the setup box in the Summary tab). Where compounding is not annual, use N = years × m and I/YR = nominal rate ÷ m.`,

summary:`
<div class="callout"><b>Scope from your slides:</b> know all the applications and concepts in the notes; exam numbers will be similar to the ones in the notes. You also need to explain how the present value of a future amount <u>changes as time is extended and as the interest rate rises</u> (it falls both ways). Your slides say you do <u>not</u> need <b>annuity due (section 5-17)</b> for the exam, and that you must learn the financial calculator on your own. Recommended problems: ST-1 to ST-4, 5-1 to 5-19, 5-22 to 5-24.</div>
<div class="callout"><b>Source note:</b> the textbook study app has Chapter 5 only through the future value of an ordinary annuity (section 5-7). The present value of an annuity, perpetuity, uneven cash flows, EAR, and amortization below come from your professor's slides (and the video). They match the standard textbook formulas.</div>

<h2>5.1 Time lines</h2>
<p>A time line shows <b>when</b> cash flows occur. Time 0 is today. Each tick mark is the <b>end of one period and the start of the next</b> (Time 1 = end of Year 1 = start of Year 2). The interest rate goes above the line; cash flows go below, with a question mark for the unknown. Always draw one first.</p>

<h2>5.2 Future value of a lump sum</h2>
<div class="formula">FV<sub>N</sub> = PV × (1 + I)<sup>N</sup><small>Formula 5.1. $100 at 5% for 3 years: 100(1.05)³ = $115.76. Slide: $100 at 10% for 3 years = $133.10.</small></div>
<ul>
<li><b>Compounding</b> = going from PV to FV. <b>Compound interest</b> = interest earned on interest. <b>Simple interest</b> = no interest on interest: FV = PV + PV(I)(N) ($100, 5%, 3 yrs = $115 vs. $115.76 compound).</li>
<li>The interest rate is a <b>growth rate</b>. It works for anything that grows (sales, EPS, salary).</li>
<li>Larger rate or longer time means a larger FV, and the curve bends upward faster.</li>
</ul>

<h2>5.3 Present value of a lump sum</h2>
<div class="formula">PV = FV<sub>N</sub> ÷ (1 + I)<sup>N</sup><small>Formula 5.2. $115.76 due in 3 years at 5% = $100. Slide: $100 due in 3 years at 10% = $75.13.</small></div>
<ul>
<li><b>Discounting</b> = going from FV to PV (the reverse of compounding). The rate used is the <b>opportunity cost</b>: what you could earn on an alternative investment of similar risk.</li>
<li><b>As the time is extended, PV falls. As the interest rate rises, PV falls.</b> The effect is dramatic: $1 million due in 100 years is worth $7,604.49 today at 5% but only about $0.0121 at 20%. (A direct slide-31 exam topic.)</li>
<li>The value of any asset is the present value of its expected future cash flows.</li>
</ul>

<h2>5.4 and 5.5 Solving for I and for N</h2>
<ul>
<li><b>Solve for I:</b> FV = PV(1+I)<sup>N</sup> has no simple factoring. Use the calculator: N=10, PV=−100, PMT=0, FV=150 → I/YR = 4.14%. (Slide: $100 → $125.97 in 3 years = 8%.) The same idea gives growth rates (5-11).</li>
<li><b>Solve for N:</b> N=?, I/YR=4.5, PV=−500,000, FV=1,000,000 → 15.7473 years. (Slide: sales growing 20% double in 3.8 years.) Doubling a lump sum at 6% takes 11.9 years; at 10%, 7.27 years.</li>
<li>With PV and FV, the <u>signs must be opposite</u> (one in, one out) or the calculator returns an error.</li>
</ul>

<h2>5.6 and 5.7 Annuities and the future value of an annuity</h2>
<p>An <b>annuity</b> is a series of <u>equal</u> payments at <u>evenly spaced</u> intervals. <b>Ordinary annuity</b> = payments at the <b>end</b> of each period (the default). <b>Annuity due</b> = payments at the <b>beginning</b> (each payment earns one extra period, so it is worth more). If the payments aren't equal or evenly spaced, it is not an annuity.</p>
<div class="formula">FVA<sub>N</sub> = PMT × [(1 + I)<sup>N</sup> − 1] ÷ I<small>Formula 5.3. $100 per year, 3 years, 5% = $315.25. Slide: $100, 3 years, 10% = $331.00. The last payment earns no interest; the first earns N − 1 periods.</small></div>
<div class="formula">PMT from a target FV: PMT = FV × I ÷ [(1 + I)<sup>N</sup> − 1]<small>Rearranged Formula 5.3. Example (ST-3b): 1,000 × 0.08 ÷ (1.08⁴ − 1) = $221.92</small></div>
<div class="formula">Annuity due: FVA<sub>due</sub> = FVA<sub>ordinary</sub> × (1 + I)<small>Not required for your exam (slide 31), but assigned in 5-6, 5-14d, 5-15d, and ST-2d.</small></div>
<ul>
<li><b>Power of compounding (slides 15–17):</b> saving $1,095 a year at 12% from age 20 to 65 (N = 45) gives <b>$1,487,261.89</b>; starting at 40 (N = 25) gives only <b>$146,000.59</b>. It pays to start early.</li>
</ul>

<h2>Present value of an annuity, perpetuity, uneven cash flows</h2>
<div class="formula">PVA<sub>N</sub> = PMT × [1 − 1 ÷ (1 + I)<sup>N</sup>] ÷ I<small>$100 per year, 3 years, 10% = $248.69 (slide 13). Slide: put PMT = 100, FV = 0 and press PV.</small></div>
<div class="formula">Loan payment: PMT = PV × I ÷ [1 − (1 + I)<sup>−N</sup>]<small>Rearranged PVA. $1,000 loan, 10%, 3 payments = $402.11 (slide 27).</small></div>
<div class="formula">PV of a perpetuity = PMT ÷ I<small>$600 forever at 5% = $12,000. At 10% = $6,000. Double the rate, half the value.</small></div>
<div class="formula">Uneven cash flows: PV = Σ CF<sub>t</sub> ÷ (1 + I)<sup>t</sup><small>Discount each cash flow separately and add. Slide 14: 100, 300, 300, −50 at 10% = $530.08. FV = PV × (1 + I)<sup>N</sup> at the last date.</small></div>

<h2>Compounding more often than once a year</h2>
<div class="formula">Periodic rate I<sub>PER</sub> = I<sub>NOM</sub> ÷ m &nbsp;|&nbsp; N<sub>periods</sub> = years × m</div>
<div class="formula">EAR = (1 + I<sub>NOM</sub> ÷ m)<sup>m</sup> − 1<small>10% semiannual: (1.05)² − 1 = 10.25%. Slide 20: annual 10.00%, quarterly 10.38%, monthly 10.47%, daily 10.52%.</small></div>
<ul>
<li><b>Nominal rate (I<sub>NOM</sub>, quoted rate, APR):</b> written in contracts; ignores compounding; never used directly in calculations or on time lines. <b>I<sub>PER</sub>:</b> used in calculations. <b>EAR (EFF%):</b> the rate actually earned; use it to compare investments with different compounding. EAR equals the nominal rate only if m = 1; otherwise EAR is larger.</li>
<li><b>More frequent compounding gives a larger FV</b> (slide 18: $100, 10%, 3 years = $133.10 annually vs $134.01 semiannually).</li>
<li><b>Payments and compounding don't match</b> (3-year $100 annuity at 10% compounded semiannually): either compound each payment, 100(1.05)⁴ + 100(1.05)² + 100 = $331.80, or find the EAR (10.25%) and treat it as an annual annuity.</li>
<li><b>Same-EAR problems (ST-4):</b> convert Bank A's nominal rate to EAR, then solve for the nominal rate with a different m.</li>
</ul>

<h2>Loan amortization</h2>
<div class="formula">INT<sub>t</sub> = Beginning balance × I &nbsp;|&nbsp; PRIN = PMT − INT &nbsp;|&nbsp; Ending balance = Beginning − PRIN<small>Find the payment first, with FV = 0 (the loan is fully paid off).</small></div>
<div class="scroll"><table>
<thead><tr><th>$1,000 loan, 10%, 3 payments of $402.11</th><th class="n">Interest</th><th class="n">Principal</th><th class="n">Ending balance</th></tr></thead>
<tbody>
<tr><td>Year 1</td><td class="n">100.00</td><td class="n">302.11</td><td class="n">697.89</td></tr>
<tr><td>Year 2</td><td class="n">69.79</td><td class="n">332.32</td><td class="n">365.57</td></tr>
<tr><td>Year 3</td><td class="n">36.56</td><td class="n">365.55</td><td class="n">≈ 0 (rounding)</td></tr>
</tbody></table></div>
<ul>
<li>The payment is constant, but <b>interest falls and principal rises</b> each period because interest is charged on a shrinking balance.</li>
<li>Slide 30: $300,000, 30-year mortgage at 6% compounded monthly: N = 360, I/YR = 0.5, PMT = $1,799 (1,798.65). First month: interest = 300,000 × 0.005 = $1,500; principal ≈ $298.65.</li>
</ul>

<h2>Calculator setup and keystrokes (BA II Plus)</h2>
<div class="card" style="margin-top:6px">
<ul style="margin-bottom:0">
<li><b>Clear before every problem:</b> 2nd, CLR TVM.</li>
<li><b>One payment per year:</b> 2nd, P/Y, type 1, ENTER, 2nd, QUIT. Do this once.</li>
<li><b>END mode:</b> 2nd, BGN. If the screen shows BGN, press 2nd, SET to switch to END, then 2nd, QUIT. Use BGN only for annuities due, then switch back.</li>
<li><b>Enter a value:</b> type the number, then the key (N, I/Y, PV, PMT, FV). For a negative, type the number, then +/−, then the key.</li>
<li><b>Solve:</b> press CPT, then the key you want (for example CPT, FV).</li>
<li><b>Rate:</b> type 5 for 5% (not 0.05). For monthly work use N = years × 12 and I/Y = nominal ÷ 12 (type 8, ÷, 12, =, then I/Y).</li>
<li><b>Show more digits:</b> 2nd, FORMAT, type 9, ENTER, 2nd, QUIT.</li>
<li><b>Uneven cash flows:</b> CF, then 2nd, CLR WORK. Enter CF0, ↓, C01, ↓, F01 (how many times it repeats), ↓, C02, … Then NPV, type the rate I, ENTER, ↓, CPT.</li>
<li><b>Amortization:</b> after finding PMT, press 2nd, AMORT. Enter P1 = 1 and P2 = 1, then ↓ to see BAL, PRN, INT for payment 1.</li>
<li><b>EAR and nominal rate:</b> 2nd, ICONV. Enter NOM and C/Y, then CPT EFF. Or enter EFF and C/Y, then CPT NOM.</li>
</ul>
</div>
<p class="hint">This assumes a TI BA II Plus (the one the video uses). Other calculators use the same five TVM variables but different key sequences. Check yours against a problem with a known answer, such as $100, 3 years, 10% → $133.10.</p>

<h2>Common mistakes</h2>
<ul>
<li>Typing 0.05 instead of 5 in I/YR.</li>
<li>Forgetting to clear the TVM memory, or leaving the calculator in BGN mode, which inflates every ordinary-annuity answer.</li>
<li>Giving PV and FV the same sign (the solver errors or returns a wrong sign).</li>
<li>Using the nominal rate for a comparison instead of EAR, or using EAR with the wrong N.</li>
<li>Dividing total growth by years (100% ÷ 5 = 20%) instead of solving for the compound rate.</li>
<li>Counting the periods wrong: Jan 1, 2021 to Jan 1, 2024 is N = 3, and a payment on Jan 1, 2022 is at Time 1, not Time 0.</li>
</ul>
`,

homework:[
{id:'st2',tag:`Recommended`,title:`ST-2: Future value (savings account at 8%)`,
 given:`It is January 1, 2021. You deposit $1,000 today into an account paying 8%.`,
 parts:[
  {l:`a`,ask:`Annual compounding: balance on January 1, 2024?`,f:`FV(N) = PV × (1 + I)^N`,
   rows:[[`PV = $1,000; I = 8%; N = 3 years`,``],[`(1.08)³`,`1.259712`]],ans:[`FV`,`$1,259.71`],calc:`N=3 · I/YR=8 · PV=−1000 · PMT=0 · CPT FV`},
  {l:`b`,ask:`Quarterly compounding: balance on January 1, 2024?`,f:`Periodic rate = 8% ÷ 4 = 2%; periods = 3 × 4 = 12`,
   rows:[[`I per quarter = 8% ÷ 4`,`2%`],[`N = 3 × 4`,`12`],[`FV = 1,000 × (1.02)¹²`,``]],ans:[`FV`,`$1,268.24`],calc:`N=12 · I/YR=2 · PV=−1000 · PMT=0 · CPT FV`},
  {l:`c`,ask:`Three payments of $333.333 on Jan 1 of 2022, 2023, 2024: balance on Jan 1, 2024?`,f:`Payments at Times 1, 2, 3 are end-of-period payments, so this is an ordinary annuity. FVA(N) = PMT × [(1 + I)^N − 1] ÷ I`,
   rows:[[`Annuity factor = (1.08³ − 1) ÷ 0.08`,`3.2464`],[`FVA = 333.333 × 3.2464`,``]],ans:[`FVA`,`$1,082.13`],calc:`N=3 · I/YR=8 · PV=0 · PMT=−333.333 · CPT FV (END mode)`,
   note:`The total deposited is the same $1,000, but each payment has less time to earn interest, so the balance is lower than part a.`},
  {l:`d`,ask:`Three payments beginning January 1, 2021: balance on Jan 1, 2024?`,f:`Payments at Times 0, 1, 2 are beginning-of-period payments: an annuity due. FVA(due) = FVA(ordinary) × (1 + I)`,
   rows:[[`Ordinary-annuity FVA from part c`,`$1,082.13`],[`× (1.08)`,``]],ans:[`FVA (due)`,`$1,168.70`],calc:`Either multiply 1082.13 × 1.08, or set BGN mode: N=3 · I/YR=8 · PV=0 · PMT=−333.333 · CPT FV, then switch back to END`,
   note:`Annuity due is not required for your exam (slide 31), but it is assigned here.`},
  {l:`e`,ask:`Three equal payments (Jan 1 2022–2024) to match part a. How large?`,f:`PMT = FV × I ÷ [(1 + I)^N − 1]`,
   rows:[[`Target FV from part a`,`$1,259.71`],[`Annuity factor (N=3, 8%)`,`3.2464`],[`PMT = 1,259.71 ÷ 3.2464`,``]],ans:[`Payment`,`$388.03`],calc:`N=3 · I/YR=8 · PV=0 · FV=1259.71 · CPT PMT (shows −388.03)`}]},

{id:'st3',tag:`Recommended`,title:`ST-3: Time value of money ($1,000 needed in 4 years)`,
 given:`It is January 1, 2021. You need $1,000 on January 1, 2025 (4 years). Your bank pays 8% compounded annually.`,
 parts:[
  {l:`a`,ask:`How much to deposit today?`,f:`PV = FV ÷ (1 + I)^N`,
   rows:[[`1.08⁴`,`1.360489`],[`PV = 1,000 ÷ 1.360489`,``]],ans:[`Deposit today`,`$735.03`],calc:`N=4 · I/YR=8 · PMT=0 · FV=1000 · CPT PV (shows −735.03)`},
  {l:`b`,ask:`Four equal payments each Jan 1 from 2022 through 2025: how large?`,f:`Payments at Times 1–4 are an ordinary annuity. PMT = FV × I ÷ [(1 + I)^N − 1]`,
   rows:[[`(1.08⁴ − 1) ÷ 0.08`,`4.5061`],[`PMT = 1,000 ÷ 4.5061`,``]],ans:[`Payment`,`$221.92`],calc:`N=4 · I/YR=8 · PV=0 · FV=1000 · CPT PMT (shows −221.92)`},
  {l:`c`,ask:`Father offers the part-b payments ($221.92) or $750 on Jan 1, 2022. Which?`,f:`Compare both offers at the same date.`,
   rows:[[`PV today of the four $221.92 payments (same as part a)`,`$735.03`],[`PV today of $750 received at Time 1 = 750 ÷ 1.08`,`$694.44`]],ans:[`Choose`,`The payments`],
   note:`The payments are worth $735.03 today versus $694.44 for the lump sum. Check at Jan 1, 2025: $750 grows to 750(1.08)³ = $944.78, short of $1,000, while the payments reach exactly $1,000.`},
  {l:`d`,ask:`If you have only $750 on Jan 1, 2022, what rate over 3 years reaches $1,000?`,f:`I = (FV ÷ PV)^(1/N) − 1`,
   rows:[[`FV ÷ PV = 1,000 ÷ 750`,`1.3333`],[`1.3333^(1/3) − 1`,``]],ans:[`Required rate`,`10.06%`],calc:`N=3 · PV=−750 · PMT=0 · FV=1000 · CPT I/YR`},
  {l:`e`,ask:`Deposit only $200 each Jan 1 2022–2025: what rate reaches $1,000?`,f:`FVA = PMT × [(1 + I)^N − 1] ÷ I with FVA = 1,000, PMT = 200, N = 4. Solve for I (no algebraic shortcut).`,
   rows:[[`Target annuity factor = 1,000 ÷ 200`,`5.0`]],ans:[`Required rate`,`15.09%`],calc:`N=4 · PV=0 · PMT=−200 · FV=1000 · CPT I/YR`,
   note:`Check: 200 × [(1.1509)⁴ − 1] ÷ 0.1509 ≈ $1,000.`},
  {l:`f`,ask:`$400 on Jan 1 2022, then six equal payments every 6 months (Jul 2022–Jan 2025). Bank pays 8% compounded semiannually. How large must each payment be?`,f:`Work in half-year periods: I per period = 8% ÷ 2 = 4%. Jan 2022 is period 2; payments are at periods 3 through 8; the target is at period 8.`,
   rows:[[`FV at period 8 of the $400 = 400 × (1.04)⁶`,`$506.13`],[`Still needed = 1,000 − 506.13`,`$493.87`],[`Annuity factor (N=6, 4%) = (1.04⁶ − 1) ÷ 0.04`,`6.6330`],[`PMT = 493.87 ÷ 6.6330`,``]],
   ans:[`Each payment`,`$74.46`],calc:`N=6 · I/YR=4 · PV=0 · FV=493.87 · CPT PMT (shows −74.46)`},
  {l:`g`,ask:`EAR (EFF%) and APR of the account in part f?`,f:`EAR = (1 + I_NOM ÷ m)^m − 1. APR = nominal rate = periodic rate × m.`,
   rows:[[`EAR = (1 + 0.08 ÷ 2)² − 1 = 1.0816 − 1`,`8.16%`],[`APR = 4% × 2`,`8.00%`]],ans:[`EAR / APR`,`8.16% / 8.00%`],calc:`2nd ICONV: NOM=8 · C/Y=2 · CPT EFF = 8.16`}]},

{id:'st4',tag:`Recommended`,title:`ST-4: Effective annual rates (Bank A vs. Bank B)`,
 given:`Bank A: 8% nominal rate (APR) with quarterly compounding. Bank B wants the same effective rate but compounds monthly. What nominal rate must Bank B set?`,
 parts:[{l:``,ask:`Bank B's nominal rate`,f:`EAR = (1 + I_NOM ÷ m)^m − 1. Find Bank A's EAR, then solve Bank B's I_NOM.`,
  rows:[[`Bank A EAR = (1 + 0.08 ÷ 4)⁴ − 1`,`8.2432%`],[`Bank B: (1 + I ÷ 12)¹² = 1.082432`,``],[`1 + I ÷ 12 = 1.082432^(1/12)`,`1.006623`],[`I ÷ 12 = 0.006623, so I = 0.006623 × 12`,``]],
  ans:[`Bank B nominal rate`,`7.95%`],calc:`2nd ICONV: NOM=8 · C/Y=4 · CPT EFF = 8.2432. Then EFF=8.2432 · C/Y=12 · CPT NOM = 7.95`,
  note:`More frequent compounding means a lower nominal rate gives the same effective rate.`}]},

{id:'p51',tag:`Recommended`,title:`Problem 5-1: Future value`,
 given:`$2,000 deposited at 6% interest compounded annually for 5 years.`,
 parts:[{l:``,ask:`How much will be in the account?`,f:`FV(N) = PV × (1 + I)^N`,
  rows:[[`(1.06)⁵`,`1.338226`],[`FV = 2,000 × 1.338226`,``]],ans:[`FV`,`$2,676.45`],calc:`N=5 · I/YR=6 · PV=−2000 · PMT=0 · CPT FV`}]},

{id:'p52',tag:`Recommended`,title:`Problem 5-2: Present value`,
 given:`A security pays $29,000 in 20 years. Equal-risk securities pay 5% annually.`,
 parts:[{l:``,ask:`What is its present value?`,f:`PV = FV ÷ (1 + I)^N`,
  rows:[[`(1.05)²⁰`,`2.653298`],[`PV = 29,000 ÷ 2.653298`,``]],ans:[`PV`,`$10,929.80`],calc:`N=20 · I/YR=5 · PMT=0 · FV=29000 · CPT PV (shows −10,929.80)`}]},

{id:'p53',tag:`Recommended`,title:`Problem 5-3: Finding the required interest rate`,
 given:`Parents retire in 19 years, have $350,000 saved, and need $800,000. No additional savings.`,
 parts:[{l:``,ask:`What annual rate must they earn?`,f:`I = (FV ÷ PV)^(1/N) − 1`,
  rows:[[`FV ÷ PV = 800,000 ÷ 350,000`,`2.285714`],[`2.285714^(1/19) − 1`,``]],ans:[`Required rate`,`4.45%`],calc:`N=19 · PV=−350000 · PMT=0 · FV=800000 · CPT I/YR`}]},

{id:'p54',tag:`Recommended`,title:`Problem 5-4: Time for a lump sum to double`,
 given:`Account pays 4% annual interest.`,
 parts:[{l:``,ask:`How long to double your money?`,f:`Solve FV = PV(1 + I)^N for N with FV = 2 × PV. The answer does not depend on the amount, so use PV = −1 and FV = 2.`,
  rows:[[`2 = (1.04)^N`,``]],ans:[`N`,`17.67 years`],calc:`I/YR=4 · PV=−1 · PMT=0 · FV=2 · CPT N`,
  note:`Check: (1.04)^17.67 = 2.00. By the log formula, N = ln 2 ÷ ln 1.04 = 0.6931 ÷ 0.03922.`}]},

{id:'p55',tag:`Recommended`,title:`Problem 5-5: Time to reach a financial goal`,
 given:`$33,556.25 in the account now; deposit $5,000 at the end of every year; goal $220,000; 12% annual return.`,
 parts:[{l:``,ask:`How many years will it take?`,f:`The goal combines a lump sum growing at 12% and an ordinary annuity. Solve for N with both PV and PMT as outflows.`,
  rows:[[`PV (outflow)`,`−33,556.25`],[`PMT (outflow, end of year)`,`−5,000`],[`FV (goal)`,`220,000`]],ans:[`N`,`11.00 years`],calc:`I/YR=12 · PV=−33556.25 · PMT=−5000 · FV=220000 · CPT N`,
  note:`Check: 33,556.25(1.12)¹¹ + 5,000[(1.12)¹¹ − 1] ÷ 0.12 = 116,729.60 + 103,273.40 ≈ 220,000. ✔ (The N has no algebraic shortcut; use the calculator.)`}]},

{id:'p56',tag:`Recommended`,title:`Problem 5-6: Annuity versus annuity due (future value)`,
 given:`$800 per year, 5 years, 5%.`,
 parts:[
  {l:`a`,ask:`Future value of the ordinary annuity?`,f:`FVA(N) = PMT × [(1 + I)^N − 1] ÷ I`,
   rows:[[`(1.05⁵ − 1) ÷ 0.05`,`5.525631`],[`FVA = 800 × 5.525631`,``]],ans:[`FVA (ordinary)`,`$4,420.51`],calc:`N=5 · I/YR=5 · PV=0 · PMT=−800 · CPT FV (END mode)`},
  {l:`b`,ask:`Future value if it were an annuity due?`,f:`FVA(due) = FVA(ordinary) × (1 + I)`,
   rows:[[`4,420.505 (unrounded) × 1.05`,``]],ans:[`FVA (due)`,`$4,641.53`],calc:`Switch to BGN mode, then N=5 · I/YR=5 · PV=0 · PMT=−800 · CPT FV. Switch back to END.`,
   note:`The due value is larger because each payment earns one extra year of interest. Not required for the exam (slide 31).`}]},

{id:'p57',tag:`Recommended`,title:`Problem 5-7: Present and future values of a cash flow stream`,
 given:`Pays $150 at the end of each of the next 3 years, $250 at the end of Year 4, $300 at Year 5, and $500 at Year 6. Equal-risk investments earn 11%.`,
 parts:[
  {l:`a`,ask:`Present value?`,f:`PV = Σ CF(t) ÷ (1 + I)^t (uneven cash flows: discount each separately)`,
   rows:[[`150 ÷ 1.11`,`135.14`],[`150 ÷ 1.11²`,`121.74`],[`150 ÷ 1.11³`,`109.68`],[`250 ÷ 1.11⁴`,`164.68`],[`300 ÷ 1.11⁵`,`178.04`],[`500 ÷ 1.11⁶`,`267.32`]],ans:[`PV (sum)`,`$976.60`],
   calc:`CF worksheet: CF0=0 · C01=150, F01=3 · C02=250, F02=1 · C03=300, F03=1 · C04=500, F04=1 · NPV, I=11, CPT → 976.60`},
  {l:`b`,ask:`Future value (at the end of Year 6)?`,f:`FV(N) = PV × (1 + I)^N`,
   rows:[[`976.60 × (1.11)⁶`,`976.60 × 1.870415`]],ans:[`FV at Year 6`,`$1,826.64`],calc:`N=6 · I/YR=11 · PV=−976.60 · PMT=0 · CPT FV`}]},

{id:'p58',tag:`Recommended`,title:`Problem 5-8: Loan amortization and EAR`,
 given:`$40,000 car loan, fully amortized over 5 years (60 monthly payments), 8% nominal rate, interest paid monthly.`,
 parts:[
  {l:`a`,ask:`Monthly loan payment?`,f:`PMT = PV × I ÷ [1 − (1 + I)^−N]`,
   rows:[[`I per month = 8% ÷ 12`,`0.6667%`],[`N = 5 × 12`,`60`],[`Payment factor = 0.006667 ÷ [1 − (1.006667)^−60]`,`0.020276`],[`PMT = 40,000 × 0.020276`,``]],ans:[`Monthly payment`,`$811.06`],
   calc:`N=60 · I/YR=0.666667 (type 8 ÷ 12 =) · PV=40000 · FV=0 · CPT PMT (shows −811.06)`},
  {l:`b`,ask:`The loan's EAR?`,f:`EAR = (1 + I_NOM ÷ m)^m − 1`,
   rows:[[`(1 + 0.08 ÷ 12)¹² − 1`,`1.083000 − 1`]],ans:[`EAR`,`8.30%`],calc:`2nd ICONV: NOM=8 · C/Y=12 · CPT EFF = 8.30`}]},

{id:'p59',tag:`Recommended`,title:`Problem 5-9: Present and future values for different periods`,
 given:`Annual compounding/discounting at 6%, $600.`,
 parts:[
  {l:`a`,ask:`$600 compounded for 1 year at 6%`,f:`FV = PV(1 + I)^N`,rows:[[`600 × 1.06`,``]],ans:[`FV`,`$636.00`],calc:`N=1 · I/YR=6 · PV=−600 · PMT=0 · CPT FV`},
  {l:`b`,ask:`$600 compounded for 2 years at 6%`,f:`FV = PV(1 + I)^N`,rows:[[`600 × (1.06)²`,`600 × 1.1236`]],ans:[`FV`,`$674.16`],calc:`N=2 · I/YR=6 · PV=−600 · PMT=0 · CPT FV`},
  {l:`c`,ask:`PV of $600 due in 1 year at 6%`,f:`PV = FV ÷ (1 + I)^N`,rows:[[`600 ÷ 1.06`,``]],ans:[`PV`,`$566.04`],calc:`N=1 · I/YR=6 · PMT=0 · FV=600 · CPT PV`},
  {l:`d`,ask:`PV of $600 due in 2 years at 6%`,f:`PV = FV ÷ (1 + I)^N`,rows:[[`600 ÷ (1.06)²`,`600 ÷ 1.1236`]],ans:[`PV`,`$534.00`],calc:`N=2 · I/YR=6 · PMT=0 · FV=600 · CPT PV`,
   note:`Pattern: more time means a larger FV and a smaller PV.`}]},

{id:'p510',tag:`Recommended`,title:`Problem 5-10: Present and future values for different interest rates`,
 given:`Annual compounding/discounting.`,
 parts:[
  {l:`a`,ask:`$200 compounded for 10 years at 4%`,f:`FV = PV(1 + I)^N`,rows:[[`200 × (1.04)¹⁰`,`200 × 1.480244`]],ans:[`FV`,`$296.05`],calc:`N=10 · I/YR=4 · PV=−200 · PMT=0 · CPT FV`},
  {l:`b`,ask:`$200 compounded for 10 years at 8%`,f:`FV = PV(1 + I)^N`,rows:[[`200 × (1.08)¹⁰`,`200 × 2.158925`]],ans:[`FV`,`$431.78`],calc:`N=10 · I/YR=8 · PV=−200 · PMT=0 · CPT FV`},
  {l:`c`,ask:`PV of $200 due in 10 years at 4%`,f:`PV = FV ÷ (1 + I)^N`,rows:[[`200 ÷ 1.480244`,``]],ans:[`PV`,`$135.11`],calc:`N=10 · I/YR=4 · PMT=0 · FV=200 · CPT PV`},
  {l:`d`,ask:`PV of $1,870 due in 10 years at 8% and at 4%`,f:`PV = FV ÷ (1 + I)^N`,rows:[[`At 8%: 1,870 ÷ 2.158925`,`$866.17`],[`At 4%: 1,870 ÷ 1.480244`,`$1,263.30`]],ans:[`PV at 8% / 4%`,`$866.17 / $1,263.30`],calc:`N=10 · PMT=0 · FV=1870, then I/YR=8 CPT PV; then I/YR=4 CPT PV`},
  {l:`e`,ask:`Define present value, illustrate with a time line, and explain the effect of interest rates.`,f:``,
   rows:[[`Time line: Time 0 ——— (8% or 4%) ——— Time 10`,``],[`At Time 10: $1,870 (known); at Time 0: PV = ?`,``]],ans:[`Higher rate`,`Lower PV`],
   note:`Present value is the amount that, if on hand today, would grow to the given future amount at the given rate. A higher rate means a lower PV ($866.17 at 8% vs $1,263.30 at 4%), because a higher rate means less money today is needed to reach the same future sum.`}]},

{id:'p511',tag:`Recommended`,title:`Problem 5-11: Growth rates`,
 given:`Sawyer Corporation's sales were $2.5 million in 2015 and $5 million in 2020.`,
 parts:[
  {l:`a`,ask:`At what rate have sales been growing?`,f:`I = (FV ÷ PV)^(1/N) − 1, with N = 2020 − 2015 = 5`,
   rows:[[`5 ÷ 2.5`,`2.0`],[`2.0^(1/5) − 1`,`1.148698 − 1`]],ans:[`Growth rate`,`14.87%`],calc:`N=5 · PV=−2.5 · PMT=0 · FV=5 · CPT I/YR`},
  {l:`b`,ask:`"Sales doubled in 5 years, 100% growth, so 100% ÷ 5 = 20% per year." Correct?`,f:`Test it: grow $2.5 million at 20% for 5 years.`,
   rows:[[`2.5 × (1.20)⁵`,`$6.22 million`],[`Actual 2020 sales`,`$5.00 million`]],ans:[`Statement is`,`Incorrect`],
   note:`Dividing by 5 ignores compounding (growth on prior growth). At 20% sales would reach $6.22 million. The correct annual rate is 14.87%.`}]},

{id:'p512',tag:`Recommended`,title:`Problem 5-12: Effective rate of interest`,
 given:`Find the interest rate earned in each case.`,
 parts:[
  {l:`a`,ask:`Borrow $720, repay $792 at the end of 1 year`,f:`I = (FV ÷ PV)^(1/N) − 1`,rows:[[`792 ÷ 720 − 1`,`1.10 − 1`]],ans:[`Rate`,`10.00%`],calc:`N=1 · PV=720 · FV=−792 · CPT I/YR`},
  {l:`b`,ask:`Lend $720, receive $792 at the end of 1 year`,f:`Same cash amounts, signs reversed`,rows:[[`792 ÷ 720 − 1`,``]],ans:[`Rate`,`10.00%`],calc:`N=1 · PV=−720 · FV=792 · CPT I/YR`,
   note:`Borrower and lender face the same rate; only the direction of the cash flows differs.`},
  {l:`c`,ask:`Borrow $65,000, repay $98,319 after 14 years`,f:`I = (FV ÷ PV)^(1/N) − 1`,rows:[[`98,319 ÷ 65,000`,`1.512600`],[`1.5126^(1/14) − 1`,``]],ans:[`Rate`,`3.00%`],calc:`N=14 · PV=65000 · PMT=0 · FV=−98319 · CPT I/YR`},
  {l:`d`,ask:`Borrow $15,000, pay $4,058.60 at the end of each year for 5 years`,f:`Annuity: PV = PMT × [1 − (1+I)^−N] ÷ I. Solve for I with the calculator.`,
   rows:[[`Target annuity factor = 15,000 ÷ 4,058.60`,`3.6959`]],ans:[`Rate`,`11.00%`],calc:`N=5 · PV=15000 · PMT=−4058.60 · FV=0 · CPT I/YR`}]},

{id:'p513',tag:`Recommended`,title:`Problem 5-13: Time for a lump sum to double`,
 given:`$300, annual compounding. The doubling time does not depend on the starting amount.`,
 parts:[
  {l:`a`,ask:`6%`,f:`Solve 2 = (1 + I)^N for N`,rows:[[`(1.06)^N = 2`,``]],ans:[`N`,`11.90 years`],calc:`I/YR=6 · PV=−300 · PMT=0 · FV=600 · CPT N`},
  {l:`b`,ask:`13%`,f:`Same setup`,rows:[[`(1.13)^N = 2`,``]],ans:[`N`,`5.67 years`],calc:`I/YR=13 · PV=−300 · PMT=0 · FV=600 · CPT N`},
  {l:`c`,ask:`21%`,f:`Same setup`,rows:[[`(1.21)^N = 2`,``]],ans:[`N`,`3.64 years`],calc:`I/YR=21 · PV=−300 · PMT=0 · FV=600 · CPT N`},
  {l:`d`,ask:`100%`,f:`Same setup`,rows:[[`(2.00)^N = 2`,``]],ans:[`N`,`1.00 year`],calc:`I/YR=100 · PV=−300 · PMT=0 · FV=600 · CPT N`,
   note:`The higher the rate, the shorter the doubling time.`}]},

{id:'p514',tag:`Recommended`,title:`Problem 5-14: Future value of an annuity`,
 given:`Ordinary annuities, compounding once a year.`,
 parts:[
  {l:`a`,ask:`$500 per year for 8 years at 14%`,f:`FVA = PMT × [(1 + I)^N − 1] ÷ I`,rows:[[`(1.14⁸ − 1) ÷ 0.14`,`13.232760`],[`500 × 13.232760`,``]],ans:[`FVA`,`$6,616.38`],calc:`N=8 · I/YR=14 · PV=0 · PMT=−500 · CPT FV`},
  {l:`b`,ask:`$250 per year for 4 years at 7%`,f:`FVA = PMT × [(1 + I)^N − 1] ÷ I`,rows:[[`(1.07⁴ − 1) ÷ 0.07`,`4.439943`],[`250 × 4.439943`,``]],ans:[`FVA`,`$1,109.99`],calc:`N=4 · I/YR=7 · PV=0 · PMT=−250 · CPT FV`},
  {l:`c`,ask:`$700 per year for 4 years at 0%`,f:`At 0% there is no interest, so FVA is just the sum of the payments (the formula would divide by zero).`,rows:[[`700 × 4`,``]],ans:[`FVA`,`$2,800.00`],calc:`N=4 · I/YR=0 · PV=0 · PMT=−700 · CPT FV`},
  {l:`d`,ask:`Rework a, b, c as annuities due`,f:`FVA(due) = FVA(ordinary) × (1 + I)`,rows:[[`a: 6,616.38 × 1.14`,`$7,542.67`],[`b: 1,109.99 × 1.07`,`$1,187.68`],[`c: 2,800 × 1.00`,`$2,800.00`]],ans:[`Annuity due FVAs`,`7,542.67 / 1,187.68 / 2,800`],
   calc:`BGN mode, then the same inputs as a, b, c. Switch back to END.`,note:`Annuity due is not required for the exam (slide 31).`}]},

{id:'p515',tag:`Recommended`,title:`Problem 5-15: Present value of an annuity`,
 given:`Ordinary annuities, discounting once a year.`,
 parts:[
  {l:`a`,ask:`$600 per year for 12 years at 8%`,f:`PVA = PMT × [1 − 1 ÷ (1 + I)^N] ÷ I`,rows:[[`[1 − 1 ÷ 1.08¹²] ÷ 0.08`,`7.536078`],[`600 × 7.536078`,``]],ans:[`PVA`,`$4,521.65`],calc:`N=12 · I/YR=8 · PMT=600 · FV=0 · CPT PV (shows −4,521.65)`},
  {l:`b`,ask:`$300 per year for 6 years at 4%`,f:`PVA = PMT × [1 − 1 ÷ (1 + I)^N] ÷ I`,rows:[[`[1 − 1 ÷ 1.04⁶] ÷ 0.04`,`5.242137`],[`300 × 5.242137`,``]],ans:[`PVA`,`$1,572.64`],calc:`N=6 · I/YR=4 · PMT=300 · FV=0 · CPT PV`},
  {l:`c`,ask:`$500 per year for 6 years at 0%`,f:`With a 0% rate, PV is just the sum of the payments.`,rows:[[`500 × 6`,``]],ans:[`PVA`,`$3,000.00`],calc:`N=6 · I/YR=0 · PMT=500 · FV=0 · CPT PV`},
  {l:`d`,ask:`Rework a, b, c as annuities due`,f:`PVA(due) = PVA(ordinary) × (1 + I)`,rows:[[`a: 4,521.65 × 1.08`,`$4,883.38`],[`b: 1,572.64 × 1.04`,`$1,635.55`],[`c: 3,000 × 1.00`,`$3,000.00`]],ans:[`Annuity due PVAs`,`4,883.38 / 1,635.55 / 3,000`],
   calc:`BGN mode, then the same inputs as a, b, c. Switch back to END.`,note:`Annuity due is not required for the exam (slide 31).`}]},

{id:'p516',tag:`Recommended`,title:`Problem 5-16: Present value of a perpetuity`,
 given:`$600 perpetuity.`,
 parts:[{l:``,ask:`PV at 5%? At 10%?`,f:`PV of a perpetuity = PMT ÷ I`,
  rows:[[`At 5%: 600 ÷ 0.05`,`$12,000`],[`At 10%: 600 ÷ 0.10`,`$6,000`]],ans:[`PV at 5% / 10%`,`$12,000 / $6,000`],calc:`Just divide: 600 ÷ 0.05 = 12000. (Perpetuity needs no TVM keys.)`,
  note:`Doubling the interest rate cuts the present value in half.`}]},

{id:'p517',tag:`Recommended`,title:`Problem 5-17: Effective interest rate`,
 given:`Borrow $230,000; annual payments of $20,430.31 for 30 years.`,
 parts:[{l:``,ask:`What interest rate are you being charged?`,f:`PVA = PMT × [1 − 1 ÷ (1 + I)^N] ÷ I. Solve for I with the calculator.`,
  rows:[[`Target annuity factor = 230,000 ÷ 20,430.31`,`11.2578`]],ans:[`Interest rate`,`8.00%`],calc:`N=30 · PV=230000 · PMT=−20430.31 · FV=0 · CPT I/YR`,
  note:`Check: 20,430.31 × [1 − 1.08^−30] ÷ 0.08 = $230,000. ✔`}]},

{id:'p518',tag:`Recommended`,title:`Problem 5-18: Uneven cash flow stream`,
 given:`Stream A: Years 1–5 = $150, $450, $450, $450, $250. Stream B: Years 1–5 = $250, $450, $450, $450, $150. Both $0 at Time 0.`,
 parts:[
  {l:`a`,ask:`PV of each stream at a 5% discount rate`,f:`PV = Σ CF(t) ÷ (1 + I)^t`,
   rows:[[`A: 150 ÷ 1.05 = 142.86; 450 ÷ 1.05² = 408.16; 450 ÷ 1.05³ = 388.73; 450 ÷ 1.05⁴ = 370.21; 250 ÷ 1.05⁵ = 195.88`,`$1,505.84`],[`B: 250 ÷ 1.05 = 238.10; 408.16; 388.73; 370.21; 150 ÷ 1.05⁵ = 117.53`,`$1,522.73`]],
   ans:[`PV(A) / PV(B)`,`$1,505.84 / $1,522.73`],calc:`CF worksheet. A: CF0=0 · C01=150,F01=1 · C02=450,F02=3 · C03=250,F03=1 · NPV, I=5, CPT. B: C01=250, C02=450 (F02=3), C03=150.`,
   note:`Stream B is worth more because it pays more money earlier (250 in Year 1 vs 150), and earlier dollars are discounted less.`},
  {l:`b`,ask:`PVs at a 0% discount rate`,f:`With 0%, PV is the sum of the cash flows.`,rows:[[`A: 150 + 450 + 450 + 450 + 250`,`$1,750`],[`B: 250 + 450 + 450 + 450 + 150`,`$1,750`]],ans:[`PV(A) = PV(B)`,`$1,750`],
   note:`With no discounting, timing doesn't matter, so the two streams are equal.`}]},

{id:'p519',tag:`Recommended`,title:`Problem 5-19: Future value of an annuity (retirement savings)`,
 given:`Client is 26. She saves $8,000 per year, first payment one year from now, expected return 10%. She expects to live 20 years if she retires at 65 and 15 years if she retires at 70.`,
 parts:[
  {l:`a`,ask:`How much will she have at 65?`,f:`N = 65 − 26 = 39 deposits. FVA = PMT × [(1 + I)^N − 1] ÷ I`,
   rows:[[`(1.10³⁹ − 1) ÷ 0.10`,`401.4478`],[`8,000 × 401.4478`,``]],ans:[`At age 65`,`$3,211,582.22`],calc:`N=39 · I/YR=10 · PV=0 · PMT=−8000 · CPT FV`},
  {l:`b`,ask:`How much at 70?`,f:`N = 70 − 26 = 44`,
   rows:[[`(1.10⁴⁴ − 1) ÷ 0.10`,`652.6408`],[`8,000 × 652.6408`,``]],ans:[`At age 70`,`$5,221,126.09`],calc:`N=44 · I/YR=10 · PV=0 · PMT=−8000 · CPT FV`},
  {l:`c`,ask:`Annual end-of-year withdrawal if retiring at 65 (20 years) and at 70 (15 years)?`,f:`The nest egg is a present value; solve PMT = PV × I ÷ [1 − (1 + I)^−N]`,
   rows:[[`At 65: PV = 3,211,582.22; N = 20`,`PMT = $377,231.24`],[`At 70: PV = 5,221,126.09; N = 15`,`PMT = $686,441.17`]],ans:[`Withdrawals (65 / 70)`,`$377,231 / $686,441`],
   calc:`At 65: N=20 · I/YR=10 · PV=−3211582.22 · FV=0 · CPT PMT. At 70: N=15 · I/YR=10 · PV=−5221126.09 · FV=0 · CPT PMT.`,
   note:`Working 5 more years raises the yearly income by about $309,000 because there are more years of deposits, more time to grow, and fewer years of withdrawals.`}]},

{id:'p522',tag:`Recommended`,title:`Problem 5-22: Loan amortization (Jan's mortgage)`,
 given:`Jan took a $10,000, 10-year mortgage with a 10% nominal rate and semiannual payments starting next June 30.`,
 parts:[
  {l:`a`,ask:`Dollar amount of each payment?`,f:`I per period = 10% ÷ 2 = 5%; N = 10 × 2 = 20. PMT = PV × I ÷ [1 − (1 + I)^−N]`,
   rows:[[`Payment factor = 0.05 ÷ [1 − 1.05^−20]`,`0.080243`],[`PMT = 10,000 × 0.080243`,``]],ans:[`Payment`,`$802.43`],calc:`N=20 · I/YR=5 · PV=10000 · FV=0 · CPT PMT (shows −802.43)`},
  {l:`b`,ask:`Interest and principal in payment 1? How do they change in payment 2?`,f:`INT = Beginning balance × I; PRIN = PMT − INT; Ending balance = Beginning − PRIN`,
   rows:[[`Payment 1: INT = 10,000 × 0.05`,`$500.00`],[`Payment 1: PRIN = 802.43 − 500.00`,`$302.43`],[`Balance after payment 1 = 10,000 − 302.43`,`$9,697.57`],[`Payment 2: INT = 9,697.57 × 0.05`,`$484.88`],[`Payment 2: PRIN = 802.43 − 484.88`,`$317.55`]],
   ans:[`Pmt 1: interest / principal`,`$500.00 / $302.43`],calc:`After finding PMT: 2nd AMORT, P1=1, P2=1, then ↓ to read BAL, PRN, INT. Repeat with P1=2, P2=2.`,
   note:`In payment 2, interest falls to $484.88 and principal rises to $317.55.`},
  {l:`c`,ask:`Interest to report on Schedule B for the first year? Same next year?`,f:`Add the interest in the two payments received during the year.`,
   rows:[[`Payment 1 interest`,`$500.00`],[`Payment 2 interest`,`$484.88`]],ans:[`First-year interest`,`$984.88`],calc:`2nd AMORT, P1=1, P2=2 → INT = −984.88`,
   note:`Not the same next year: payments 3 and 4 carry interest of about $921.33, because the balance has been paid down.`}]},

{id:'p523',tag:`Recommended`,title:`Problem 5-23: Future value for various compounding periods`,
 given:`$500 at 12% nominal for 5 years. Use FV = PV(1 + I_NOM ÷ m)^(m × years).`,
 parts:[
  {l:`a`,ask:`Annually`,f:`m = 1`,rows:[[`500 × (1.12)⁵`,`500 × 1.762342`]],ans:[`FV`,`$881.17`],calc:`N=5 · I/YR=12 · PV=−500 · PMT=0 · CPT FV`},
  {l:`b`,ask:`Semiannually`,f:`m = 2: I = 6%, N = 10`,rows:[[`500 × (1.06)¹⁰`,`500 × 1.790848`]],ans:[`FV`,`$895.42`],calc:`N=10 · I/YR=6 · PV=−500 · PMT=0 · CPT FV`},
  {l:`c`,ask:`Quarterly`,f:`m = 4: I = 3%, N = 20`,rows:[[`500 × (1.03)²⁰`,`500 × 1.806111`]],ans:[`FV`,`$903.06`],calc:`N=20 · I/YR=3 · PV=−500 · PMT=0 · CPT FV`},
  {l:`d`,ask:`Monthly`,f:`m = 12: I = 1%, N = 60`,rows:[[`500 × (1.01)⁶⁰`,`500 × 1.816697`]],ans:[`FV`,`$908.35`],calc:`N=60 · I/YR=1 · PV=−500 · PMT=0 · CPT FV`},
  {l:`e`,ask:`Daily (365 days)`,f:`m = 365: I = 12 ÷ 365 = 0.032877%, N = 1,825`,rows:[[`500 × (1 + 0.12 ÷ 365)¹⁸²⁵`,`500 × 1.821939`]],ans:[`FV`,`$910.97`],calc:`N=1825 · I/YR=0.0328767 (type 12 ÷ 365 =) · PV=−500 · PMT=0 · CPT FV`,
   note:`Part f (why the pattern) is explained in the conceptual questions below.`}]},

{id:'p524',tag:`Recommended`,title:`Problem 5-24: Present value for various discounting periods`,
 given:`$500 due in the future at a 12% nominal rate. Use PV = FV ÷ (1 + I_NOM ÷ m)^(m × years).`,
 parts:[
  {l:`a`,ask:`Semiannual compounding, discounted back 5 years`,f:`I = 6%, N = 10`,rows:[[`500 ÷ (1.06)¹⁰`,`500 ÷ 1.790848`]],ans:[`PV`,`$279.20`],calc:`N=10 · I/YR=6 · PMT=0 · FV=500 · CPT PV`},
  {l:`b`,ask:`Quarterly compounding, discounted back 5 years`,f:`I = 3%, N = 20`,rows:[[`500 ÷ (1.03)²⁰`,`500 ÷ 1.806111`]],ans:[`PV`,`$276.84`],calc:`N=20 · I/YR=3 · PMT=0 · FV=500 · CPT PV`},
  {l:`c`,ask:`Monthly compounding, discounted back 1 year`,f:`I = 1%, N = 12`,rows:[[`500 ÷ (1.01)¹²`,`500 ÷ 1.126825`]],ans:[`PV`,`$443.72`],calc:`N=12 · I/YR=1 · PMT=0 · FV=500 · CPT PV`,
   note:`Part d (why the PVs differ) is explained in the conceptual questions below.`}]}
],

homeworkConcept:[
{id:'q523f',title:`Questions 5-23f and 5-24d: Why do the FVs and PVs follow these patterns?`,
 body:`<p><b>5-23f (future values):</b> the FV rises as compounding becomes more frequent ($881.17 annual, $895.42 semiannual, $903.06 quarterly, $908.35 monthly, $910.97 daily). With more frequent compounding, interest is added to the balance sooner, so you earn interest on interest more often. The <b>effective annual rate</b> is higher than the 12% nominal rate (12.00%, 12.36%, 12.55%, 12.68%, 12.75%). The gains shrink as compounding gets more frequent, so the FV climbs more slowly each time.</p>
 <p><b>5-24d (present values):</b> the PV falls as compounding becomes more frequent ($279.20 semiannual vs $276.84 quarterly for the 5-year case). More frequent compounding means a higher effective rate, and a higher rate means more discounting, so the same future $500 is worth less today. This is the same idea as the PV falling when the interest rate rises.</p>`},
{id:'q522d',title:`Question 5-22d: If payments are constant, why does the interest income change over time?`,
 body:`<p>Each payment is the same, but interest is calculated on the <b>outstanding balance</b>, and the balance falls every time part of a payment goes to principal. Lower balance means lower interest ($500.00 in payment 1, $484.88 in payment 2). Since the payment is fixed, the portion going to principal rises by the same amount the interest falls ($302.43, then $317.55). So interest income falls over the life of the loan, which also means the interest Jan reports each year declines.</p>`},
{id:'q510e',title:`Question 5-10e: Define present value, show a time line, and explain how interest rates affect it`,
 body:`<p><b>Present value</b> is the amount that, if it were on hand today, would grow to equal a given future amount at a given interest rate. It is found by discounting (the reverse of compounding): PV = FV ÷ (1 + I)^N.</p>
 <p><b>Time line (data from part d):</b> Time 0 (PV = ?), interest rate 8% or 4% above the line, Time 10 (FV = $1,870 below the line).</p>
 <p><b>Effect of interest rates:</b> a higher rate makes the PV smaller. $1,870 due in 10 years is worth $866.17 at 8% but $1,263.30 at 4%. The same is true of time: the further away the payment, the smaller the PV.</p>`},
{id:'qst3c',title:`ST-1: Key terms (definitions)`,
 body:`<p>All definitions for ST-1 (a–j) are listed in the table at the bottom of this tab and in the Flashcards.</p>`}
],

st1Title:`ST-1: Key terms`,
st1:[
 [`a. Time line`,`A diagram showing the timing of cash flows: time periods along the line, the interest rate above it, and cash flows below the tick marks (? for unknowns).`],
 [`b. FV(N)`,`Future value: the amount a present sum or series will grow to after N periods.`],
 [`b. PV`,`Present value: the value today of a future cash flow or stream, at a given interest rate.`],
 [`b. I (or I/YR)`,`The interest rate per period (input as a whole-number percent on a financial calculator).`],
 [`b. INT`,`Dollars of interest (for example, in a loan payment, interest = beginning balance × I).`],
 [`b. N`,`The number of periods (years, months, etc.).`],
 [`b. FVA(N)`,`Future value of an annuity: the accumulated value of N equal payments.`],
 [`b. PMT`,`The payment: the equal cash flow in an annuity or loan.`],
 [`b. PVA(N)`,`Present value of an annuity: the value today of N equal payments.`],
 [`c. Compounding`,`Finding the future value of a present sum (PV to FV).`],
 [`c. Discounting`,`Finding the present value of a future sum (FV to PV); the reverse of compounding.`],
 [`d. Simple interest`,`Interest earned only on the original principal, never on interest: FV = PV + PV(I)(N).`],
 [`d. Compound interest`,`Interest earned on interest from prior periods as well as on principal: FV = PV(1 + I)^N.`],
 [`e. Opportunity cost`,`The rate of return you could earn on an alternative investment of similar risk; the rate used to discount.`],
 [`f. Annuity`,`A series of equal payments at fixed intervals for a set number of periods.`],
 [`f. Ordinary (deferred) annuity`,`An annuity with payments at the end of each period.`],
 [`f. Annuity due`,`An annuity with payments at the beginning of each period.`],
 [`f. Perpetuity`,`An annuity that never ends (payments continue forever). PV = PMT ÷ I.`],
 [`g. Uneven (nonconstant) cash flow`,`A series of cash flows that are not all equal, so annuity shortcuts don't apply; discount each flow separately.`],
 [`g. Payment (PMT)`,`An equal cash flow within an annuity.`],
 [`g. Cash flow (CF(t))`,`The cash received or paid at time t; the t-th flow in an uneven stream.`],
 [`h. Annual compounding`,`Interest is added once per year (m = 1).`],
 [`h. Semiannual compounding`,`Interest is added twice per year (m = 2); periodic rate = nominal ÷ 2.`],
 [`i. Nominal (quoted) rate / APR`,`The stated annual rate that ignores the effect of compounding within the year (I_NOM).`],
 [`i. Effective annual rate (EAR or EFF%)`,`The annual rate actually earned, accounting for compounding: (1 + I_NOM ÷ m)^m − 1.`],
 [`j. Amortized loan`,`A loan repaid with equal periodic payments that cover both interest and principal, paying it off completely by the end.`],
 [`j. Amortization schedule`,`A table showing each payment split into interest and principal and the remaining balance.`]
],
homeworkHint:`Everything assigned for Chapter 5 (ST-1 to ST-4, 5-1 to 5-19, 5-22 to 5-24) is here. Problems 5-20 and 5-21 are not in your recommended list.`,

cards:[
 {k:`term`,f:`Time line`,b:`A diagram of when cash flows occur: Time 0 is today; each tick is the end of one period and the start of the next. Rate above the line, cash flows below.`},
 {k:`term`,f:`Compounding vs. discounting`,b:`Compounding: PV to FV. Discounting: FV to PV (the reverse).`},
 {k:`term`,f:`Simple vs. compound interest`,b:`Simple: interest only on the original principal, FV = PV + PV(I)(N). Compound: interest on interest, FV = PV(1+I)^N.`},
 {k:`term`,f:`Opportunity cost (rate)`,b:`The return on an alternative investment of similar risk; the rate you use to discount.`},
 {k:`term`,f:`How does PV change as time lengthens or the rate rises?`,b:`PV falls in both cases. $1 million due in 100 years is worth about $7,604 at 5% but only about $0.01 at 20%.`},
 {k:`term`,f:`Why does a longer time or higher rate raise FV?`,b:`More periods of interest, and a higher growth rate on a larger and larger base (compounding).`},
 {k:`term`,f:`Ordinary annuity vs. annuity due`,b:`Ordinary: payments at the end of each period. Due: payments at the beginning, so each earns one extra period and is worth more. (Due is not on your exam.)`},
 {k:`term`,f:`What makes something an annuity?`,b:`Equal payments at evenly spaced intervals for a set number of periods. If not equal or evenly spaced, the shortcut formulas don't apply.`},
 {k:`term`,f:`Perpetuity`,b:`An annuity that continues forever. PV = PMT ÷ I.`},
 {k:`term`,f:`Uneven (nonconstant) cash flow`,b:`Cash flows that differ across periods. Discount each one separately and add them up (or use the CF worksheet).`},
 {k:`term`,f:`Nominal rate (APR)`,b:`The quoted annual rate that ignores compounding. Written in contracts; not used directly in calculations or on time lines.`},
 {k:`term`,f:`Periodic rate (I_PER)`,b:`Nominal rate ÷ m. This is the rate used in calculations and shown on time lines.`},
 {k:`term`,f:`Effective annual rate (EAR)`,b:`The rate actually earned in a year, including compounding. Use it to compare investments with different compounding frequencies.`},
 {k:`term`,f:`When does EAR equal the nominal rate?`,b:`Only with annual compounding (m = 1). If m > 1, EAR is always larger.`},
 {k:`term`,f:`Effect of more frequent compounding`,b:`FV gets larger (interest on interest more often), but by smaller and smaller amounts.`},
 {k:`term`,f:`Amortized loan`,b:`Repaid with equal payments covering interest and principal. FV = 0 when you solve for the payment.`},
 {k:`term`,f:`Amortization schedule pattern`,b:`Constant payment; interest falls and principal rises each period because interest is charged on a shrinking balance.`},
 {k:`term`,f:`Why is growth rate not total growth ÷ years?`,b:`That ignores compounding. Sales that double in 5 years grew 14.87% a year, not 20%.`},
 {k:`term`,f:`Calculator sign rule`,b:`Money you pay out is negative; money you receive is positive. PV and FV need opposite signs (PMT = 0) or the solver errors.`},
 {k:`term`,f:`Calculator rate entry`,b:`Type 5 for 5%, not 0.05. For monthly: I/YR = nominal ÷ 12 and N = years × 12.`},
 {k:`term`,f:`BEGIN vs. END mode`,b:`END for ordinary annuities (default). BEGIN only for annuities due; switch back afterwards, or every later ordinary-annuity answer is inflated.`},
 {k:`formula`,f:`Future value of a lump sum`,b:`FV = PV × (1 + I)^N`},
 {k:`formula`,f:`Present value of a lump sum`,b:`PV = FV ÷ (1 + I)^N`},
 {k:`formula`,f:`Solve for the rate`,b:`I = (FV ÷ PV)^(1/N) − 1. Or calculator: N, PV, FV, PMT = 0, CPT I/YR.`},
 {k:`formula`,f:`Solve for the time`,b:`Calculator: I/YR, PV, FV, PMT = 0, CPT N. Doubling: use PV = −1, FV = 2.`},
 {k:`formula`,f:`Future value of an ordinary annuity`,b:`FVA = PMT × [(1 + I)^N − 1] ÷ I`},
 {k:`formula`,f:`Payment from a target FV`,b:`PMT = FV × I ÷ [(1 + I)^N − 1]`},
 {k:`formula`,f:`Present value of an ordinary annuity`,b:`PVA = PMT × [1 − 1 ÷ (1 + I)^N] ÷ I`},
 {k:`formula`,f:`Loan payment`,b:`PMT = PV × I ÷ [1 − (1 + I)^−N], with FV = 0`},
 {k:`formula`,f:`Perpetuity`,b:`PV = PMT ÷ I`},
 {k:`formula`,f:`Annuity due`,b:`Value = ordinary-annuity value × (1 + I) (either FV or PV)`},
 {k:`formula`,f:`Uneven cash flows`,b:`PV = Σ CF(t) ÷ (1 + I)^t. FV at the end = PV × (1 + I)^N.`},
 {k:`formula`,f:`Periodic rate and number of periods`,b:`I_PER = I_NOM ÷ m; N = years × m`},
 {k:`formula`,f:`Effective annual rate`,b:`EAR = (1 + I_NOM ÷ m)^m − 1`},
 {k:`formula`,f:`Interest, principal, ending balance`,b:`INT = Beginning balance × I; PRIN = PMT − INT; Ending balance = Beginning − PRIN`},
 {k:`formula`,f:`10% semiannual: EAR?`,b:`(1 + 0.10 ÷ 2)² − 1 = 10.25%`},
 {k:`formula`,f:`$100, 3 years, 10%: FV and PV`,b:`FV = $133.10. PV of $100 due in 3 years = $75.13.`},
 {k:`formula`,f:`3-year $100 ordinary annuity at 10%`,b:`FVA = $331.00; PVA = $248.69`},
 {k:`formula`,f:`$1,000 loan, 10%, 3 payments`,b:`PMT = $402.11. Year 1: interest $100, principal $302.11, balance $697.89.`},
 {k:`formula`,f:`Savings example (slides)`,b:`$1,095 a year at 12%: from age 20 (N=45) = $1,487,262; from age 40 (N=25) = $146,001.`},
 {k:`formula`,f:`Mortgage example (slides)`,b:`$300,000, 30 yr, 6% monthly: N = 360, I/YR = 0.5, PMT ≈ $1,799. First month interest = $1,500.`}
],

quiz:[
 {q:`What is the future value of $500 invested for 2 years at 10% compounded annually?`,o:[`$600`,`$605`,`$550`,`$625`],a:1,e:`FV = 500 × (1.10)² = 500 × 1.21 = $605. ($600 is simple interest; $550 is one year.)`},
 {q:`What is the present value of $1,210 due in 2 years at a 10% discount rate?`,o:[`$1,000`,`$1,100`,`$968`,`$1,331`],a:0,e:`PV = 1,210 ÷ (1.10)² = 1,210 ÷ 1.21 = $1,000.`},
 {q:`As the interest rate increases, the present value of a future sum…`,o:[`Increases`,`Decreases`,`Stays the same`,`Depends on the amount`],a:1,e:`A higher discount rate means more discounting, so PV falls. PV also falls as the payment date moves further away.`},
 {q:`$100 grows to $125.97 in 3 years. What annual rate was earned?`,o:[`7%`,`8%`,`9%`,`10%`],a:1,e:`(125.97 ÷ 100)^(1/3) − 1 = 8%. Calculator: N=3, PV=−100, FV=125.97, CPT I/YR = 8.`},
 {q:`What is the future value of a 3-year ordinary annuity of $100 per year at 10%?`,o:[`$300.00`,`$331.00`,`$364.10`,`$248.69`],a:1,e:`FVA = 100 × [(1.10)³ − 1] ÷ 0.10 = 100 × 3.31 = $331.00. ($248.69 is the present value.)`},
 {q:`What is the present value of a 3-year ordinary annuity of $100 per year at 10%?`,o:[`$331.00`,`$300.00`,`$248.69`,`$273.55`],a:2,e:`PVA = 100 × [1 − 1 ÷ (1.10)³] ÷ 0.10 = 100 × 2.4869 = $248.69.`},
 {q:`What is the present value of a $50 perpetuity at a 5% interest rate?`,o:[`$250`,`$2,500`,`$1,000`,`$100`],a:2,e:`PV = PMT ÷ I = 50 ÷ 0.05 = $1,000.`},
 {q:`What is the effective annual rate of a 10% nominal rate compounded semiannually?`,o:[`10.00%`,`10.25%`,`10.50%`,`5.00%`],a:1,e:`EAR = (1 + 0.10 ÷ 2)² − 1 = 1.1025 − 1 = 10.25%.`},
 {q:`For the same nominal rate, which compounding gives the largest future value?`,o:[`Annual`,`Semiannual`,`Quarterly`,`Monthly`],a:3,e:`More frequent compounding earns interest on interest more often, so monthly gives the largest FV (though the differences get small).`},
 {q:`On a $1,000 loan at 10% with a $402.11 annual payment, how much of the first payment is interest and principal?`,o:[`$100.00 interest, $302.11 principal`,`$302.11 interest, $100.00 principal`,`$40.21 interest, $361.90 principal`,`$200.00 interest, $202.11 principal`],a:0,e:`Interest = beginning balance × I = 1,000 × 0.10 = $100. Principal = 402.11 − 100 = $302.11.`},
 {q:`You enter N=3, I/YR=10, PV=−100, PMT=0 and press CPT FV. What is shown?`,o:[`−133.10`,`133.10`,`−110.00`,`130.00`],a:1,e:`FV = 100(1.10)³ = $133.10, shown as positive because PV was entered as an outflow (negative).`},
 {q:`What is the present value of $100 received at the end of Year 1 and $300 at the end of Year 2, at 10%?`,o:[`$400.00`,`$338.84`,`$300.00`,`$363.64`],a:1,e:`PV = 100 ÷ 1.10 + 300 ÷ 1.10² = 90.91 + 247.93 = $338.84. For uneven flows, discount each one separately.`},
 {q:`A 5-year car loan has monthly payments and a 12% nominal rate. With 1 payment per period on your calculator, what do you enter for N and I/YR?`,o:[`N = 5, I/YR = 12`,`N = 60, I/YR = 12`,`N = 60, I/YR = 1`,`N = 12, I/YR = 5`],a:2,e:`N = 5 × 12 = 60 months; I/YR = 12% ÷ 12 = 1% per month.`},
 {q:`Sales doubled in 5 years. Which statement is correct?`,o:[`Growth was 20% per year (100% ÷ 5)`,`Growth was about 14.87% per year`,`Growth was 10% per year`,`Growth cannot be computed`],a:1,e:`Solve 2 = (1 + g)^5, so g = 2^(1/5) − 1 = 14.87%. Dividing by 5 ignores compounding.`},
 {q:`When can the effective annual rate equal the nominal rate?`,o:[`Never`,`Only with annual compounding (m = 1)`,`Only with daily compounding`,`Whenever the rate is below 10%`],a:1,e:`EAR = (1 + I_NOM ÷ m)^m − 1 equals I_NOM only when m = 1. If m > 1, EAR is larger.`}
],

video:{
 id:`ci39OSFps4A`,
 caution:`The video's time-value section starts at 2:04:07 and uses a BA II Plus, the same keys as your slides (N, I/Y, PV, PMT, FV; CPT to solve). The instructor uses r for the rate, and he works the loan payment problem with monthly compounding. The transcript I had stops at about 3:04:01 (partway through a perpetuity problem), so anything after that is not mapped. The video does not cover future value of an annuity, uneven cash flows, annuity due, compounding-period comparisons, or amortization schedules.`,
 rows:[
  {hw:`Problems 5-1, 5-9, 5-10 (future value) and ST-2a`,why:`Future value of a lump sum by formula and by calculator, with the compounding idea.`,
   clips:[[ts('2:05:04'),'2:05:04–2:09:36','FV of a lump sum: intuition, the formula, and the 10-year example'],[ts('2:09:36'),'2:09:36–2:12:37','Same example on the BA II Plus (N, I/Y, PV, PMT, FV and CPT)'],[ts('2:13:26'),'2:13:26–2:18:53','Worked problem: $5,000 at 4% for 5 years, by formula and by calculator, including clearing the TVM memory']]},
  {hw:`Problems 5-3, 5-11, 5-12a–c and ST-3d (rates)`,why:`Solving for the interest rate by algebra and by calculator.`,
   clips:[[ts('2:19:02'),'2:19:02–2:23:26','Rate of return: set up FV = PV(1+r)^N, then take the Nth root'],[ts('2:23:26'),'2:23:26–2:25:09','Same problem on the calculator (CPT I/Y)'],[ts('2:35:42'),'2:35:42–2:44:42','Growth and annualized rates over long periods (58 years, 73 years), plus a calculator check']]},
  {hw:`Problems 5-2, 5-10c–d, and ST-3a (present value)`,why:`Discounting a future sum, and comparing a payment today to a larger one later.`,
   clips:[[ts('2:25:20'),'2:25:20–2:28:41','PV by formula: divide by (1+r)^N'],[ts('2:28:41'),'2:28:41–2:30:06','Same on the calculator (CPT PV)']]},
  {hw:`Problems 5-4, 5-5, 5-13 (solving for N)`,why:`Time to reach a goal; trial and error, then CPT N.`,
   clips:[[ts('2:30:06'),'2:30:06–2:33:50','Why N has no easy algebra and how trial and error works'],[ts('2:33:58'),'2:33:58–2:35:42','CPT N on the calculator (tip: set PV negative, FV positive)']]},
  {hw:`Problems 5-15, 5-17, ST-3e (present value of annuity, annuity rate)`,why:`PV of an annuity by formula and by calculator.`,
   clips:[[ts('2:44:42'),'2:44:42–2:48:00','Setting up the annuity on a number line; why you discount each payment'],[ts('2:48:00'),'2:48:00–2:51:51','The PVA formula, step by step on a calculator'],[ts('2:51:51'),'2:51:51–2:53:49','Same problem with N, I/Y, PMT, FV = 0, CPT PV']]},
  {hw:`Problems 5-8, 5-22a, ST-3g, ST-4 (loan payment, APR, EAR)`,why:`APR vs. periodic rate, monthly loan payment, and effective annual rate.`,
   clips:[[ts('2:53:49'),'2:53:49–2:55:22','APR = periodic rate × periods per year, so monthly rate = APR ÷ 12'],[ts('2:55:22'),'2:55:22–2:57:50','Loan payment: PVA formula solved for the payment'],[ts('2:57:50'),'2:57:50–2:58:41','Same loan on the calculator (CPT PMT)'],[ts('2:58:41'),'2:58:41–3:00:01','Effective annual rate from the monthly rate']]},
  {hw:`Problem 5-16 (perpetuity)`,why:`PV of a perpetuity is the payment divided by the rate.`,
   clips:[[ts('3:00:01'),'3:00:01–3:02:33','Perpetuity formula, why it works, and the calculator trick (huge N)']]}
 ],
 missing:`Not in the video: future value of an annuity (5-6, 5-14, 5-19, ST-2c, ST-3b), uneven cash flows (5-7, 5-18), annuity due, compounding-frequency comparisons (5-23, 5-24), and amortization schedules (5-22b–d). For those, use the Summary and Homework tabs.`,
 later:[]
}
});


/* ============================================================
   CHAPTER 6
   ============================================================ */
CHAPTERS.push({
id:'ch6',
title:`Chapter 6: Interest Rates`,
calcNote:`<b>Calculator note:</b> Chapter 6 uses basic arithmetic plus the y<sup>x</sup> (power) key for the forward-rate problems. There are no time-value-of-money keys here (N, I/YR, PV, PMT, FV). To square a number use y<sup>x</sup> 2 (or the x² key); for a square root use y<sup>x</sup> 0.5; for a cube root use y<sup>x</sup> then (1 ÷ 3). Keep full precision and round only the final answer. The textbook uses r for rates; your slides use k (same thing).`,

summary:`
<div class="callout"><b>Scope from your slides:</b> know the four factors that affect the cost of money; the determinants of market interest rates (r = r* + IP + DRP + LP + MRP); real vs. nominal rates; the yield curve and its shapes; how to calculate the 1-year expected rate one year from now (forward rate) from spot rates; the pure expectations theory; and the other factors (Fed policy, deficits, business activity, international). Assigned: <b>ST-1, ST-3a, Problems 6-2 to 6-6, Questions 6-2 and 6-3</b>. Your slides also list "interest rates and business decisions" (text section 6.8).</div>
<div class="callout"><b>Source note:</b> the textbook study app you gave me stops at Chapter 5, so this chapter is built from your professor's slides, the problems, and the standard textbook formulas. The explanations for the conceptual questions are my reasoning from the slides; compare them with your textbook's answers.</div>

<h2>6.1 The cost of money</h2>
<ul>
<li>The price of <b>debt capital</b> is the <b>interest rate</b>. The price of <b>equity capital</b> is the <b>required return</b> (dividends plus capital gains).</li>
<li><b>Four factors affect the cost of money:</b>
<ul>
<li><b>Production opportunities:</b> returns firms can earn by investing in productive assets. More opportunities mean more demand for funds, so rates rise.</li>
<li><b>Time preferences for consumption:</b> people prefer to consume now; the more impatient savers are, the higher the rate needed to persuade them to save.</li>
<li><b>Risk:</b> the chance an investment returns less than expected. More risk means a higher required return.</li>
<li><b>Expected inflation:</b> lenders want compensation for lost purchasing power, so higher expected inflation means higher rates.</li>
</ul></li>
</ul>

<h2>6.2 The determinants of interest rates</h2>
<div class="formula">r = r* + IP + DRP + LP + MRP<small>r = required return (nominal rate) on a debt security. Your slides write it with k.</small></div>
<div class="scroll"><table>
<thead><tr><th>Symbol</th><th>Name</th><th>What it pays for</th></tr></thead>
<tbody>
<tr><td>r*</td><td>Real risk-free rate</td><td>The rate on a riskless security if no inflation were expected (like a T-bill with zero inflation). Typically 1% to 4%.</td></tr>
<tr><td>IP</td><td>Inflation premium</td><td>Expected inflation over the life of the security (the average).</td></tr>
<tr><td>DRP</td><td>Default risk premium</td><td>Risk the issuer won't pay interest or principal. Corporates only (Treasuries have none).</td></tr>
<tr><td>LP</td><td>Liquidity premium</td><td>Risk of not being able to sell quickly at a fair price. Corporates (Treasuries are very liquid).</td></tr>
<tr><td>MRP</td><td>Maturity risk premium</td><td>Extra risk of long-term bonds (interest rate risk), partly offset by reinvestment rate risk on short-term ones.</td></tr>
</tbody></table></div>
<h3>Which premiums apply to which security (slide 5)</h3>
<div class="scroll"><table>
<thead><tr><th></th><th>IP</th><th>MRP</th><th>DRP</th><th>LP</th></tr></thead>
<tbody>
<tr><td>Short-term Treasury</td><td>✓</td><td>–</td><td>–</td><td>–</td></tr>
<tr><td>Long-term Treasury</td><td>✓</td><td>✓</td><td>–</td><td>–</td></tr>
<tr><td>Short-term corporate</td><td>✓</td><td>–</td><td>✓</td><td>✓</td></tr>
<tr><td>Long-term corporate</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
</tbody></table></div>
<p class="hint">Every security includes r* and IP. T-bill: r* + IP. Treasury bond: r* + IP + MRP. Corporate bond: Treasury yield + DRP + LP (add MRP for long maturities).</p>

<div class="formula">r<sub>RF</sub> (T-bill) = r* + IP &nbsp;|&nbsp; r (T-bond) = r* + IP + MRP<small>A short-term T-bill has no DRP, LP, or (essentially) MRP. If a problem hands you those premiums for a T-bill, they're distractors (Problem 6-2).</small></div>
<div class="formula">IP = average expected inflation = (I<sub>1</sub> + I<sub>2</sub> + … + I<sub>n</sub>) ÷ n<small>ST-2: inflation of 2%, 2%, 2%, 4% over 4 years averages 2.5%.</small></div>
<div class="formula">Corporate yield = Treasury yield + DRP + LP<small>Rearranged: DRP = corporate − Treasury − LP (Problem 6-4). The spread widens as the corporate bond rating falls.</small></div>
<div class="formula">Inflation cross-product: (1 + r<sub>RF</sub>) = (1 + r*)(1 + IP), so r<sub>RF</sub> = r* + IP + (r* × IP)<small>Ignoring r* × IP is fine when inflation is low, but matters when it is high. Problem 6-6: 5% real and 18% inflation give 23.9%, not 23%.</small></div>
<ul>
<li><b>Interest rate risk:</b> bond prices fall when rates rise, more for long maturities (this is why MRP is positive). <b>Reinvestment rate risk:</b> when rates fall, short-term securities must be rolled over at lower rates.</li>
<li><b>Slide 6 exam question:</b> 7.5% = 3% + IP + 0.5% + 1.5% + 0.5% → IP = <b>2.0%</b> (answer c).</li>
</ul>

<h2>6.3 Term structure and the yield curve</h2>
<ul>
<li>The <b>term structure of interest rates</b> is the relationship between yields and maturities. The <b>yield curve</b> is the graph of it for securities of the same risk (usually Treasuries).</li>
<li><b>Shapes:</b> <b>normal</b> = upward sloping (long-term yields above short-term); <b>inverted ("abnormal")</b> = downward sloping (short-term above long-term); <b>humped</b> = medium-term rates highest; <b>flat</b> = about the same at all maturities.</li>
<li><b>Corporate vs. Treasury curves (slides 8–9):</b> corporate yield curves lie above the Treasury curve, though not necessarily parallel to it. The spread (DRP + LP) widens as the bond rating falls.</li>
<li><b>Slide 10 exam question:</b> r* = 3% and inflation 2% forever with no MRP means every Treasury yields 5% at every maturity, so the Treasury curve is flat (answer c). A corporate curve does not <i>have</i> to be flat, because DRP and LP can vary by maturity.</li>
</ul>

<h2>6.4 The pure expectations theory (PEH)</h2>
<ul>
<li>The shape of the yield curve depends on what investors <b>expect future short-term rates to be</b>. If rates are expected to rise, the curve slopes up; if expected to fall, it slopes down; it can also bow.</li>
<li>PEH assumes the <b>maturity risk premium on Treasuries is zero</b>. A long-term rate is an <b>average of the current and expected future short-term rates</b>, so you can "back out" the market's expected future rates from the yield curve.</li>
<li>Most evidence says lenders prefer short-term securities and see long-term ones as riskier (so the MRP is really positive), which makes PEH a simplification.</li>
</ul>
<div class="formula">Geometric method: (1 + Y<sub>n</sub>)<sup>n</sup> = (1 + Y<sub>m</sub>)<sup>m</sup> × (1 + f)<sup>n − m</sup><small>Y = yields (spot rates), f = expected forward rate for the remaining n − m years.</small></div>
<div class="formula">Arithmetic shortcut: Y<sub>n</sub> × n = Y<sub>m</sub> × m + f × (n − m)<small>Close to the geometric answer. Slide 14: 2-year CD 2.8%, 1-year CD 2.4% → f = 2(2.8) − 2.4 = 3.2%.</small></div>
<div class="scroll"><table>
<thead><tr><th>Slide example (Treasury yields)</th><th class="n">Yield</th></tr></thead>
<tbody>
<tr><td>1 year</td><td class="n">6.0%</td></tr><tr><td>2 years</td><td class="n">6.2%</td></tr><tr><td>3 years</td><td class="n">6.4%</td></tr><tr><td>4 years</td><td class="n">6.5%</td></tr><tr><td>5 years</td><td class="n">6.5%</td></tr>
</tbody></table></div>
<ul>
<li><b>One-year rate, one year from now (slide 13):</b> (1.062)² = (1.060)(1 + X) → 1.127844 ÷ 1.060 = 1.064004 → <b>X = 6.4004%</b>. With the arithmetic shortcut: 6.2% = (6.0% + X) ÷ 2 → X = 6.4%.</li>
<li><b>Slide 15 exam question:</b> 1-year bond 4%, 2-year bond 4.5% → expected 1-year rate next year = 2(4.5) − 4 = <b>5.0%</b> (answer b; geometric gives 5.002%).</li>
<li>Use the shortcut when the slide or the exam answer choices are rounded; use the geometric formula when the problem says "geometric averages" (ST-3).</li>
</ul>

<h2>6.5 Other factors that influence interest rate levels</h2>
<ul>
<li><b>Federal Reserve policy:</b> expanding the money supply tends to <i>lower</i> short-term rates at first (more money to lend), but the extra money can raise expected inflation, which pushes rates up later.</li>
<li><b>Federal budget deficit or surplus:</b> larger deficits mean more government borrowing, which raises rates.</li>
<li><b>Level of business activity:</b> rates rise in expansions (strong demand for funds) and fall in recessions.</li>
<li><b>International factors:</b> a <b>foreign trade deficit</b> (importing more than exporting) is financed by borrowing from foreigners, adding to demand for funds and raising rates. Foreign interest rates and exchange rates matter too.</li>
<li><b>Interest rates and business decisions (section 6.8):</b> rate changes affect a firm's choice between short- and long-term debt and its investment decisions (see Question 6-3).</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li>Adding DRP, LP, or MRP to a T-bill (Problem 6-2) or DRP and LP to a Treasury bond.</li>
<li>Forgetting that <b>IP is an average</b> over the security's life, not just the current year's inflation.</li>
<li>Mixing up arithmetic and geometric forward rates: ST-3 asks for geometric averages.</li>
<li>For forward rates over more than one year, forgetting to take the (n − m)-th root (for example, the square root in ST-3c, the cube root in ST-3d).</li>
</ul>
`,

homework:[
{id:'st2',tag:`Extra practice`,title:`ST-2: Inflation and interest rates`,
 given:`Real risk-free rate r* = 3%, constant. Inflation: 2% per year for the next 3 years, then 4% per year for the next 5 years. Maturity risk premium MRP = 0.1 × (t − 1)%, where t = the bond's maturity. Default risk premium on a BBB-rated bond = 1.3%.`,
 parts:[
  {l:`a`,ask:`Average expected inflation over the next 4 years?`,f:`IP = average expected inflation over the life of the security = (I₁ + I₂ + … + I_n) ÷ n`,
   rows:[[`Years 1–3: 2% each`,`2% × 3 = 6%`],[`Year 4: 4%`,`4%`],[`Total inflation over 4 years`,`10%`]],ans:[`Average = 10% ÷ 4`,`2.5%`],calc:`6 + 4 = 10, then 10 ÷ 4 =`},
  {l:`b`,ask:`Yield on a 4-year Treasury bond?`,f:`r(T-bond) = r* + IP + MRP (Treasuries have no DRP or LP)`,
   rows:[[`r*`,`3.0%`],[`IP = average inflation (part a)`,`2.5%`],[`MRP = 0.1 × (4 − 1)`,`0.3%`]],ans:[`4-year Treasury yield`,`5.8%`]},
  {l:`c`,ask:`Yield on a 4-year BBB corporate bond with a liquidity premium of 0.5%?`,f:`r = r* + IP + DRP + LP + MRP (corporate yield = Treasury yield + DRP + LP)`,
   rows:[[`Treasury yield (part b)`,`5.8%`],[`+ DRP (BBB)`,`1.3%`],[`+ LP`,`0.5%`]],ans:[`4-year BBB yield`,`7.6%`]},
  {l:`d`,ask:`Yield on an 8-year Treasury bond?`,f:`r = r* + IP + MRP`,
   rows:[[`Average inflation = (3 × 2% + 5 × 4%) ÷ 8 = 26 ÷ 8`,`3.25%`],[`r*`,`3.0%`],[`MRP = 0.1 × (8 − 1)`,`0.7%`]],ans:[`8-year Treasury yield`,`6.95%`],calc:`3 × 2 + 5 × 4 = 26; 26 ÷ 8 = 3.25; 3 + 3.25 + 0.7 =`,
   note:`The 8 years are 3 years at 2% and 5 years at 4%, so there are no inflation years beyond these.`},
  {l:`e`,ask:`Yield on an 8-year BBB corporate bond with a liquidity premium of 0.5%?`,f:`Corporate yield = Treasury yield + DRP + LP`,
   rows:[[`8-year Treasury yield (part d)`,`6.95%`],[`+ DRP`,`1.3%`],[`+ LP`,`0.5%`]],ans:[`8-year BBB yield`,`8.75%`]},
  {l:`f`,ask:`If the yield on a 9-year Treasury bond is 7.3%, what does that imply about expected inflation in year 9?`,f:`Solve for IP, convert it to total inflation over 9 years, then subtract the years already known.`,
   rows:[[`MRP = 0.1 × (9 − 1)`,`0.8%`],[`IP = 7.3 − 3.0 − 0.8`,`3.5%`],[`Total inflation over 9 years = 9 × 3.5%`,`31.5%`],[`Known inflation in years 1–8 = 3 × 2 + 5 × 4`,`26%`]],
   ans:[`Expected inflation in year 9 = 31.5 − 26`,`5.5%`],
   note:`A 3.5% average over 9 years, when years 1–8 average only 3.25%, requires a high year-9 rate to make up the difference.`}]},

{id:'st3',tag:`Assigned (part a); b–d extra practice`,title:`ST-3: Pure expectations theory`,
 given:`Treasury yields: 1-year 6.0%, 2-year 6.2%, 3-year 6.3%, 4-year 6.5%. No maturity risk premium. Use the expectations theory and geometric averages to forecast the yields on the securities below.`,
 parts:[
  {l:`a`,ask:`A 1-year security, 1 year from now`,f:`(1 + Y₂)² = (1 + Y₁)(1 + f). A 2-year rate is the geometric average of today's 1-year rate and next year's 1-year rate.`,
   rows:[[`(1.062)²`,`1.127844`],[`÷ (1.060) = 1 + f`,`1.064004`]],ans:[`1-year rate, 1 year from now`,`6.40%`],calc:`1.062 y^x 2 = ÷ 1.06 − 1 = 0.0640`,
   note:`Arithmetic check: 2 × 6.2 − 6.0 = 6.4%. The geometric answer is 6.4004% (slide 13).`},
  {l:`b`,ask:`A 1-year security, 2 years from now`,f:`(1 + Y₃)³ = (1 + Y₂)²(1 + f)`,
   rows:[[`(1.063)³`,`1.201157`],[`(1.062)²`,`1.127844`],[`1 + f = 1.201157 ÷ 1.127844`,`1.065003`]],ans:[`1-year rate, 2 years from now`,`6.50%`],calc:`1.063 y^x 3 = ÷ 1.127844 − 1 = 0.0650`},
  {l:`c`,ask:`A 2-year security, 1 year from now`,f:`(1 + Y₃)³ = (1 + Y₁)(1 + f)². Take the square root to get the annual rate.`,
   rows:[[`(1.063)³ ÷ 1.060 = (1 + f)²`,`1.133167`],[`1 + f = √1.133167`,`1.064502`]],ans:[`2-year rate, 1 year from now`,`6.45%`],calc:`1.201157 ÷ 1.06 = 1.133167; then 1.133167 y^x 0.5 = 1.0645`,
   note:`Arithmetic check: (3 × 6.3 − 6.0) ÷ 2 = 6.45%.`},
  {l:`d`,ask:`A 3-year security, 1 year from now`,f:`(1 + Y₄)⁴ = (1 + Y₁)(1 + f)³. Take the cube root to get the annual rate.`,
   rows:[[`(1.065)⁴ ÷ 1.060 = (1 + f)³`,`1.213647`],[`1 + f = 1.213647^(1/3)`,`1.066719`]],ans:[`3-year rate, 1 year from now`,`6.67%`],calc:`1.065 y^x 4 = 1.286466; ÷ 1.06 = 1.213647; y^x (1 ÷ 3) = 1.0667`,
   note:`Arithmetic check: (4 × 6.5 − 6.0) ÷ 3 = 6.67%.`}]},

{id:'p62',tag:`Assigned`,title:`Problem 6-2: Real risk-free rate`,
 given:`30-day T-bills yield 5.8%. Estimated premiums: inflation 3.25%, liquidity 0.6%, maturity risk 1.85%, default risk 2.15%.`,
 parts:[{l:``,ask:`What is the real risk-free rate of return?`,f:`r(T-bill) = r* + IP. A 30-day T-bill has no default risk, essentially no liquidity premium, and negligible maturity risk, so only the inflation premium is added to r*.`,
  rows:[[`T-bill yield`,`5.80%`],[`− Inflation premium`,`3.25%`]],ans:[`Real risk-free rate r* = 5.80 − 3.25`,`2.55%`],calc:`5.8 − 3.25 =`,
  note:`The liquidity, maturity risk, and default risk premiums are distractors: they apply to longer-term or non-Treasury securities.`}]},

{id:'p63',tag:`Assigned`,title:`Problem 6-3: Expected interest rate`,
 given:`Real risk-free rate 2.25%. Inflation is expected to be 2.5% this year and 4.25% during each of the next 2 years. Maturity risk premium is zero.`,
 parts:[
  {l:`a`,ask:`Yield on 2-year Treasury securities?`,f:`r = r* + IP, where IP = average inflation over the life (this year and next year)`,
   rows:[[`Average inflation = (2.5% + 4.25%) ÷ 2`,`3.375%`],[`r*`,`2.25%`]],ans:[`2-year yield`,`5.625%`],calc:`2.5 + 4.25 = 6.75; ÷ 2 = 3.375; + 2.25 =`},
  {l:`b`,ask:`Yield on 3-year Treasury securities?`,f:`IP = average over years 1, 2, and 3`,
   rows:[[`Average inflation = (2.5% + 4.25% + 4.25%) ÷ 3`,`3.6667%`],[`r*`,`2.25%`]],ans:[`3-year yield`,`5.9167%`],calc:`2.5 + 4.25 + 4.25 = 11; ÷ 3 = 3.6667; + 2.25 =`,
   note:`The longer security has a higher yield because expected inflation is higher in the later years.`}]},

{id:'p64',tag:`Assigned`,title:`Problem 6-4: Default risk premium`,
 given:`A 10-year Treasury bond yields 5.75%. A 10-year corporate bond yields 8.75%. The liquidity premium on the corporate bond is 0.35%.`,
 parts:[{l:``,ask:`What is the default risk premium on the corporate bond?`,f:`Corporate yield = Treasury yield + DRP + LP, so DRP = corporate yield − Treasury yield − LP`,
  rows:[[`Corporate yield`,`8.75%`],[`− Treasury yield`,`5.75%`],[`− Liquidity premium`,`0.35%`]],ans:[`Default risk premium`,`2.65%`],calc:`8.75 − 5.75 − 0.35 =`,
  note:`Both bonds have the same maturity, so r*, IP, and MRP are the same for both and cancel out.`}]},

{id:'p65',tag:`Assigned`,title:`Problem 6-5: Maturity risk premium`,
 given:`Real risk-free rate 2.5%. Inflation is expected to be 2.75% for the next 2 years. A 2-year Treasury security yields 5.55%.`,
 parts:[{l:``,ask:`What is the maturity risk premium for the 2-year security?`,f:`r(T-bond) = r* + IP + MRP, so MRP = r − r* − IP`,
  rows:[[`2-year Treasury yield`,`5.55%`],[`− r*`,`2.50%`],[`− IP (inflation 2.75% in each of 2 years, so the average is 2.75%)`,`2.75%`]],ans:[`Maturity risk premium`,`0.30%`],calc:`5.55 − 2.5 − 2.75 =`}]},

{id:'p66',tag:`Assigned`,title:`Problem 6-6: Inflation cross-product`,
 given:`Developing-nation security with no maturity, default, or liquidity risk. Real risk-free rate 5%; inflation expected to be 18% each of the next 4 years.`,
 parts:[{l:``,ask:`What is the yield on a 4-year security?`,f:`(1 + r_RF) = (1 + r*)(1 + IP), so r_RF = r* + IP + (r* × IP)`,
  rows:[[`IP = average inflation (18% every year)`,`18%`],[`(1 + r*)(1 + IP) = (1.05)(1.18)`,`1.239`],[`r_RF = 1.239 − 1`,`0.239`]],ans:[`4-year yield`,`23.9%`],calc:`1.05 × 1.18 = 1.239; − 1 =`,
  note:`The simple sum r* + IP = 23% leaves out the cross-product r* × IP = 5% × 18% = 0.9%. With low inflation this term is negligible; with 18% inflation it is not.`}]}
],

homeworkConcept:[
{id:'q62',title:`Question 6-2: Which fluctuate more, long-term or short-term interest rates? Why?`,
 body:`<p><b>Short-term rates fluctuate more.</b></p>
 <ul>
 <li><b>A long-term rate is an average.</b> By the pure expectations theory (slide 11), a long-term rate is an average of today's and expected future short-term rates. A temporary jump in the current short-term rate moves that average only a little.</li>
 <li><b>Short-term rates respond to current conditions.</b> The Federal Reserve operates mainly in the short-term market, and short-term rates react quickly to business activity, credit demand, and near-term inflation. Long-term rates depend on expected inflation and conditions over many years, which change more slowly.</li>
 <li><b>Reversion:</b> when short-term rates spike or plunge, people expect them to return toward normal, so long-term rates move much less.</li>
 </ul>`},
{id:'q63',title:`Question 6-3: Entering a recession, must raise debt now. Borrow short-term or long-term?`,
 body:`<p><b>Borrow short-term.</b></p>
 <ul>
 <li>Interest rates are cyclical: they rise in expansions and <b>fall in recessions</b> (slide 16: level of business activity). Demand for funds drops and the Fed usually eases.</li>
 <li>If you borrow long-term now, you lock in today's higher rates for years. Borrowing short-term lets you <b>refinance, or issue long-term debt, after rates have fallen</b>.</li>
 <li>With a normal (upward-sloping) yield curve, short-term rates are lower today anyway.</li>
 <li><b>Trade-off:</b> short-term debt must be rolled over, so there is refinancing risk (credit could be tight or rates could rise unexpectedly). Long-term debt gives certainty but at a higher locked-in rate.</li>
 </ul>`},
{id:'q64',title:`Question 6-4: Area Y (young population) vs. Area O (old population)`,
 body:`<p><b>a. Rates would likely be different.</b> A young population has more borrowers (people buying homes, starting families and businesses) and fewer savings, so the <b>demand for funds is high and the supply is low</b>, which pushes interest rates up in Area Y. An older population has accumulated savings and borrows less, so the supply of funds is high and demand is low, which means lower rates in Area O. (This is the time-preference and production-opportunity factors on slide 2.)</p>
 <p><b>b. Nationwide branching and diversified financial companies would narrow the gap.</b> They can move money from Area O (surplus savings) to Area Y (strong demand for funds), so interest rates in the two areas move toward each other. With a national capital market, a local imbalance matters much less.</p>`},
{id:'q65',title:`Question 6-5: A process to make oil from seawater (expensive equipment, low energy prices in time)`,
 body:`<p><b>In the short run, interest rates would rise.</b> The new process creates large new <b>production opportunities</b> (slide 2): firms want to invest heavily in the expensive equipment, so the demand for capital increases and borrowing rates rise.</p>
 <p><b>In the long run, rates would be pushed back down</b> by the effect on prices. If energy becomes much cheaper, expected inflation falls, which lowers the inflation premium. So the long-run effect is lower inflation and lower rates, once the investment boom passes.</p>`},
{id:'q66',title:`Question 6-6: Congress takes away the Fed's independence and forces it to expand the money supply`,
 body:`<p><b>a. Immediately after the announcement:</b> a larger money supply means more funds to lend, which tends to <b>lower short-term rates</b>. But investors expect more inflation (and more risk with a politically controlled Fed), so the <b>inflation premium and maturity risk premium rise</b> and <b>long-term rates rise</b>. The result is a <b>steeper, upward-sloping yield curve</b>.</p>
 <p><b>b. Two to three years later:</b> the extra money has increased actual and expected inflation, so <b>short-term rates have risen too</b>. The whole curve moves up to a higher level, and the slope becomes flatter as short-term rates catch up (and it could even turn downward if the Fed has to tighten to fight inflation).</p>
 <p class="note">Check this against your textbook's answer key; the textbook may phrase the timing differently.</p>`},
{id:'qslide6',title:`Slide 6 exam question: find the expected inflation rate`,
 body:`<p>r = r* + IP + DRP + LP + MRP. Plug in the 1-year corporate bond: 7.5% = 3% + IP + 1.5% + 0.5% + 0.5%. So IP = 7.5 − 3 − 1.5 − 0.5 − 0.5 = <b>2.0% (answer c)</b>. For a 1-year bond, IP is just next year's expected inflation.</p>`},
{id:'qslide10',title:`Slide 10 exam question: the yield curve with r* = 3% and 2% inflation forever`,
 body:`<p>No maturity risk premium (expectations theory) and constant inflation means every Treasury yields r* + IP = 3% + 2% = 5% at every maturity. The Treasury yield curve is <b>flat at 5%</b> (<b>answer c</b>).</p>
 <ul>
 <li><b>a is wrong:</b> a corporate curve doesn't <i>have</i> to be flat, because DRP and LP can differ by maturity.</li>
 <li><b>b is wrong:</b> nothing makes the curve slope up then down.</li>
 <li><b>d is wrong</b> because it requires a to be correct.</li>
 </ul>`},
{id:'qslide15',title:`Slide 15 exam question: expected 1-year rate, one year from now`,
 body:`<p>1-year yield 4%, 2-year yield 4.5%. Arithmetic average: 4.5% = (4% + X) ÷ 2, so X = 2(4.5) − 4 = <b>5.0% (answer b)</b>. The geometric method gives (1.045)² ÷ 1.04 − 1 = 5.002%, essentially the same.</p>`}
],

st1Title:`ST-1: Key terms`,
st1:[
 [`a. Production opportunities`,`Investment opportunities in productive assets that can earn a return. More and better opportunities mean greater demand for capital and higher interest rates.`],
 [`a. Time preferences for consumption`,`The preference of people to consume now rather than later. Savers must be paid interest to give up current consumption, so stronger preference for now means higher rates.`],
 [`a. Risk`,`The chance an investment will earn less than expected. Higher risk requires a higher return.`],
 [`a. Inflation`,`The tendency of prices to rise over time, which reduces purchasing power. Lenders require compensation for it.`],
 [`b. Real risk-free rate, r*`,`The rate on a riskless security if no inflation were expected (like a T-bill with zero inflation); typically 1% to 4%.`],
 [`b. Nominal risk-free rate, r_RF`,`The quoted rate on a risk-free security such as a T-bill: r* plus the inflation premium.`],
 [`c. Inflation premium (IP)`,`The premium added to r* for expected inflation: the average expected inflation over the life of the security.`],
 [`d. Default risk premium (DRP)`,`The extra yield on a bond that reflects the chance the issuer will fail to pay interest or principal. Treasuries have none; it rises as credit rating falls.`],
 [`e. Liquidity premium (LP)`,`The extra yield on securities that cannot be sold quickly at a fair price. Treasuries have almost none.`],
 [`e. Maturity risk premium (MRP)`,`The extra yield on longer-term bonds that compensates for interest rate risk (price falls when rates rise).`],
 [`f. Interest rate risk`,`The risk that the price of a bond falls when interest rates rise. It is larger for longer-term bonds.`],
 [`f. Reinvestment rate risk`,`The risk that when rates fall, a bond's coupons or maturing principal must be reinvested at lower rates. It is larger for short-term securities.`],
 [`g. Term structure of interest rates`,`The relationship between yields on securities of the same risk and their maturities.`],
 [`g. Yield curve`,`The graph of the term structure: yield on the vertical axis, maturity on the horizontal axis.`],
 [`h. "Normal" yield curve`,`Upward sloping: long-term rates are higher than short-term rates.`],
 [`h. Inverted ("abnormal") yield curve`,`Downward sloping: short-term rates are higher than long-term rates.`],
 [`h. Humped yield curve`,`Medium-term rates are higher than both short-term and long-term rates.`],
 [`i. Pure expectations theory`,`The shape of the yield curve depends on expected future short-term rates. Long-term rates are an average of current and expected short-term rates, with a maturity risk premium of zero.`],
 [`j. Foreign trade deficit`,`When a country imports more than it exports. It must borrow from foreigners to finance the gap, adding to demand for funds and tending to push interest rates up.`]
],
homeworkHint:`Everything on your assigned list is here (ST-1, ST-3a, Problems 6-2 to 6-6, Questions 6-2 and 6-3), plus extra practice: ST-2, ST-3 b–d, and Questions 6-4 to 6-6.`,

cards:[
 {k:`term`,f:`Cost of debt vs. cost of equity`,b:`Debt: the interest rate. Equity: the required return (dividends plus capital gains).`},
 {k:`term`,f:`Four factors that affect the cost of money`,b:`Production opportunities, time preferences for consumption, risk, and expected inflation.`},
 {k:`term`,f:`Production opportunities`,b:`Returns available from productive investment. More opportunities → more demand for capital → higher rates.`},
 {k:`term`,f:`Time preferences for consumption`,b:`Preference for consuming now vs. later. Stronger preference for now → savers demand higher rates.`},
 {k:`term`,f:`Real risk-free rate (r*)`,b:`The rate on a riskless security with no expected inflation. Typically 1% to 4%.`},
 {k:`term`,f:`Nominal risk-free rate (r_RF)`,b:`The T-bill rate: r* + IP.`},
 {k:`term`,f:`Inflation premium (IP)`,b:`Compensation for expected inflation, equal to the average expected inflation over the security's life.`},
 {k:`term`,f:`Default risk premium (DRP)`,b:`Extra yield for the chance the issuer won't pay. None on Treasuries; larger for lower-rated corporates.`},
 {k:`term`,f:`Liquidity premium (LP)`,b:`Extra yield for securities that can't be sold quickly at a fair price. Corporates, not Treasuries.`},
 {k:`term`,f:`Maturity risk premium (MRP)`,b:`Extra yield on long-term bonds for interest rate risk. Applies to long-term securities, not short-term.`},
 {k:`term`,f:`Interest rate risk`,b:`Bond prices fall when rates rise; bigger for long-term bonds (the reason for MRP).`},
 {k:`term`,f:`Reinvestment rate risk`,b:`When rates fall, cash flows must be reinvested at lower rates; bigger for short-term securities.`},
 {k:`term`,f:`Premiums on a short-term Treasury`,b:`Only r* + IP (no MRP, DRP, or LP).`},
 {k:`term`,f:`Premiums on a long-term corporate bond`,b:`All of them: r* + IP + MRP + DRP + LP.`},
 {k:`term`,f:`Term structure vs. yield curve`,b:`Term structure: relationship between yields and maturities. Yield curve: the graph of it.`},
 {k:`term`,f:`Normal yield curve`,b:`Upward sloping (long-term yields above short-term).`},
 {k:`term`,f:`Inverted (abnormal) yield curve`,b:`Downward sloping (short-term yields above long-term).`},
 {k:`term`,f:`Humped yield curve`,b:`Medium-term yields are the highest.`},
 {k:`term`,f:`Corporate vs. Treasury yield curves`,b:`Corporate curves are higher (not necessarily parallel). The spread (DRP + LP) widens as the bond rating falls.`},
 {k:`term`,f:`Pure expectations theory`,b:`Yield curve shape reflects expected future short-term rates. Long-term rate = average of current and expected short-term rates. MRP = 0.`},
 {k:`term`,f:`If interest rates are expected to rise, the yield curve...`,b:`Slopes upward (long-term rates above short-term). If rates are expected to fall, it slopes downward.`},
 {k:`term`,f:`Which fluctuate more: short- or long-term rates?`,b:`Short-term rates. A long-term rate is an average of expected future short-term rates, which smooths out changes.`},
 {k:`term`,f:`Effect of the Fed expanding the money supply`,b:`Short-term rates tend to fall at first; the added money can raise expected inflation, pushing rates up later.`},
 {k:`term`,f:`Effect of a larger federal budget deficit`,b:`More government borrowing, so interest rates rise.`},
 {k:`term`,f:`Interest rates over the business cycle`,b:`Rates rise in expansions and fall in recessions.`},
 {k:`term`,f:`Foreign trade deficit`,b:`Imports exceed exports. Financed by borrowing from abroad, which raises demand for funds and rates.`},
 {k:`formula`,f:`Required return on a debt security`,b:`r = r* + IP + DRP + LP + MRP`},
 {k:`formula`,f:`T-bill yield`,b:`r_RF = r* + IP`},
 {k:`formula`,f:`Treasury bond yield`,b:`r = r* + IP + MRP`},
 {k:`formula`,f:`Corporate bond yield`,b:`Treasury yield + DRP + LP (same maturity). DRP = corporate − Treasury − LP.`},
 {k:`formula`,f:`Inflation premium for an n-year security`,b:`IP = (I₁ + I₂ + … + I_n) ÷ n (average expected inflation)`},
 {k:`formula`,f:`Inflation cross-product`,b:`(1 + r_RF) = (1 + r*)(1 + IP), so r_RF = r* + IP + r* × IP`},
 {k:`formula`,f:`Forward rate, geometric`,b:`(1 + Y_n)^n = (1 + Y_m)^m × (1 + f)^(n − m)`},
 {k:`formula`,f:`1-year rate one year from now (geometric)`,b:`f = (1 + Y₂)² ÷ (1 + Y₁) − 1. Slide: (1.062)² ÷ 1.060 − 1 = 6.4004%.`},
 {k:`formula`,f:`Forward rate, arithmetic shortcut`,b:`f = 2 × Y₂ − Y₁. Slide: 2(2.8) − 2.4 = 3.2%.`},
 {k:`formula`,f:`Solve for the real risk-free rate from a T-bill`,b:`r* = T-bill yield − IP (ignore DRP, LP, MRP)`},
 {k:`formula`,f:`Solve for the maturity risk premium`,b:`MRP = Treasury yield − r* − IP`}
],

quiz:[
 {q:`Which of these is NOT one of the four fundamental factors that affect the cost of money?`,o:[`Production opportunities`,`Time preferences for consumption`,`Federal income tax rates`,`Expected inflation`],a:2,e:`The four factors are production opportunities, time preferences for consumption, risk, and expected inflation. Taxes are not on the list.`},
 {q:`The real risk-free rate is 2% and the inflation premium is 3%. What is the yield on a 30-day T-bill?`,o:[`1%`,`3%`,`5%`,`6%`],a:2,e:`T-bill yield = r* + IP = 2% + 3% = 5%. A short-term T-bill has no DRP, LP, or MRP.`},
 {q:`r = 9%, r* = 2%, MRP = 1%, DRP = 2%, and LP = 0.5%. What is the inflation premium?`,o:[`3.5%`,`4.5%`,`2.5%`,`5.0%`],a:0,e:`IP = 9 − 2 − 1 − 2 − 0.5 = 3.5%.`},
 {q:`r* = 2.5%, IP = 3%, MRP = 1%. What is the yield on a long-term Treasury bond?`,o:[`5.5%`,`6.5%`,`7.5%`,`2.5%`],a:1,e:`r = r* + IP + MRP = 2.5 + 3 + 1 = 6.5%. Treasuries have no DRP or LP.`},
 {q:`A 5-year Treasury yields 5%. A 5-year corporate bond has DRP 1.5% and LP 0.5%. What is the corporate yield?`,o:[`5.0%`,`6.5%`,`7.0%`,`8.0%`],a:2,e:`Corporate yield = Treasury yield + DRP + LP = 5 + 1.5 + 0.5 = 7.0%.`},
 {q:`Expected inflation is 2%, 3%, and 4% over the next 3 years. What is the inflation premium on a 3-year security?`,o:[`2.0%`,`3.0%`,`4.0%`,`9.0%`],a:1,e:`IP is the average: (2 + 3 + 4) ÷ 3 = 3.0%.`},
 {q:`1-year Treasuries yield 4% and 2-year Treasuries yield 4.5%. Using the arithmetic shortcut with the expectations theory, what is the expected 1-year rate one year from now?`,o:[`4.25%`,`5.0%`,`4.5%`,`5.5%`],a:1,e:`2(4.5) − 4 = 5.0%. The geometric method gives about 5.002%.`},
 {q:`1-year yield 5%, 2-year yield 5.5%. Using geometric averages, what is the expected 1-year rate one year from now?`,o:[`5.50%`,`6.00%`,`6.50%`,`5.25%`],a:1,e:`(1.055)² ÷ 1.05 − 1 = 1.113025 ÷ 1.05 − 1 = 6.002%.`},
 {q:`Investors expect short-term interest rates to rise. Under the pure expectations theory, the yield curve will…`,o:[`Slope downward`,`Slope upward`,`Be flat`,`Be impossible to draw`],a:1,e:`If short-term rates are expected to rise, long-term rates (the average of current and future short rates) will be higher than short-term rates, so the curve slopes up.`},
 {q:`An inverted yield curve means…`,o:[`Long-term rates are above short-term rates`,`Short-term rates are above long-term rates`,`All rates are equal`,`Medium-term rates are the highest`],a:1,e:`Inverted (abnormal) = downward sloping: short-term yields exceed long-term yields. A humped curve has the highest rates in the middle.`},
 {q:`Which premiums would you include in the yield on a 30-day Treasury bill?`,o:[`Only the inflation premium (with r*)`,`Inflation and default risk premiums`,`Inflation and maturity risk premiums`,`All four premiums`],a:0,e:`A short-term Treasury has only r* + IP. There is no default risk, no real liquidity concern, and negligible maturity risk.`},
 {q:`r* = 5% and inflation will be 10% every year for 4 years. What is the exact yield on a risk-free 4-year security (using the cross-product)?`,o:[`15.0%`,`15.5%`,`16.0%`,`10.5%`],a:1,e:`(1.05)(1.10) − 1 = 15.5%. The simple sum (15%) leaves out the cross-product 5% × 10% = 0.5%.`},
 {q:`As a corporate bond's credit rating falls, the spread between its yield and the Treasury yield…`,o:[`Narrows`,`Widens`,`Stays the same`,`Disappears`],a:1,e:`A lower rating means a higher default risk premium, so the spread widens.`},
 {q:`If r* = 3% and inflation is expected to be 2% forever, with no maturity risk premium, the Treasury yield curve is…`,o:[`Upward sloping`,`Downward sloping`,`Flat at 5%`,`Flat at 3%`],a:2,e:`Every maturity yields r* + IP = 3% + 2% = 5%, so the curve is flat at 5%.`},
 {q:`Which usually fluctuates more over time?`,o:[`Long-term rates`,`Short-term rates`,`They fluctuate equally`,`Neither fluctuates`],a:1,e:`Short-term rates are more volatile. A long-term rate is an average of expected future short-term rates, which smooths out changes.`}
],

video:{
 id:`ci39OSFps4A`,
 caution:`The video transcript you gave me covers the first five chapters' material (financial statements, ratios, projections, and time value of money). It does not cover interest rate determinants, the yield curve, or expectations theory, so there are no timestamps for Chapter 6. If your professor or the instructor has a Chapter 6 video, send the link and the transcript and I'll add timestamps for each problem.`,
 rows:[],
 missing:`No Chapter 6 coverage in the transcript I have.`,
 later:[]
},
});

/* ----- Chapter 6 slide map ----- */
CHAPTERS.find(c=>c.id==='ch6').slides=[
 {n:2,t:`The cost of money`,k:`The price of debt capital is the interest rate. The price of equity capital is the required return (dividends and capital gains). Four factors affect the cost of money: production opportunities, time preferences for consumption, risk, and expected inflation.`,
  ex:`Money has a price. For borrowed money, it's the interest rate; for investors' money, it's the return they require. Four forces set it: <b>production opportunities</b> (the better the investments businesses can make, the more they will borrow, which pushes rates up); <b>time preferences</b> (people would rather spend now, so savers must be paid to wait); <b>risk</b> (riskier means a higher required return); and <b>expected inflation</b> (lenders want to keep their purchasing power).`,
  how:`Question 6-4 is about time preferences and demand for funds (young vs. old areas); Question 6-5 is about new production opportunities.`,
  hw:[`q64|Question 6-4`,`q65|Question 6-5`,`st1|ST-1 a|a`]},
 {n:3,t:`"Nominal" vs. "real" rates`,k:`k = any nominal rate. k* = the real risk-free rate, like a T-bill rate if there were no inflation (typically 1% to 4%). k<sub>RF</sub> = the rate on Treasury securities.`,
  ex:`A <b>nominal</b> rate is the quoted rate, which includes expected inflation. The <b>real risk-free rate</b> (r*) is what you'd earn on a riskless investment if there were <i>no</i> inflation. The nominal risk-free rate is r* plus an inflation premium. (Your slides write these as k; the textbook uses r. They are the same.) When inflation is very high, adding the premiums isn't exact, because the real rate and inflation interact (the cross-product).`,
  how:`Problem 6-6 uses the exact relationship (1 + r) = (1 + r*)(1 + IP) with a 5% real rate and 18% inflation.`,
  hw:[`p66|Problem 6-6`,`st1|ST-1 b|b`]},
 {n:4,t:`Determinants of interest rates`,k:`<b>r = r* + IP + DRP + LP + MRP</b>. r = required return on a debt security; r* = real risk-free rate; IP = inflation premium; DRP = default risk premium; LP = liquidity premium; MRP = maturity risk premium.`,
  ex:`This is the master formula of the chapter. Start with the real risk-free rate, then add a premium for each risk the lender bears: <b>IP</b> for expected inflation (the average over the security's life), <b>DRP</b> for default risk, <b>LP</b> for hard-to-sell securities, and <b>MRP</b> for the interest rate risk of long maturities. Most problems give you all but one piece, so you rearrange to solve for the missing one (r*, MRP, DRP, or IP).`,
  how:`Problem 6-3 builds a yield from r* and average inflation. Problem 6-5 solves for MRP. ST-2 builds a whole set of yields (Treasury and corporate) and works backward to find future inflation.`,
  hw:[`p63|Problem 6-3`,`p65|Problem 6-5`,`st2|ST-2 a, b, d, f|a,b,d,f`,`st1|ST-1 c, d|c,d`]},
 {n:5,t:`Premiums added to r* for different types of debt`,k:`Table: for short-term Treasury, long-term Treasury, short-term corporate, and long-term corporate, which of IP, MRP, DRP, and LP apply.`,
  ex:`Fill in the table like this. <b>IP</b>: every security. <b>MRP</b>: only long-term securities (Treasury and corporate). <b>DRP</b>: corporate only (Treasuries can't default in practice). <b>LP</b>: corporate (Treasuries are extremely liquid). So a short-term Treasury is r* + IP; a long-term Treasury adds MRP; a short-term corporate adds DRP and LP instead; and a long-term corporate has all four. <b>Interest rate risk</b> (bond prices fall when rates rise) is why long-term bonds carry an MRP; <b>reinvestment rate risk</b> (cash flows reinvested at lower rates) partly offsets it for short-term securities.`,
  how:`Problem 6-2 tests exactly this: the T-bill only has r* + IP, so the other premiums given are distractors.`,
  hw:[`p62|Problem 6-2`,`st1|ST-1 e, f|e,f`]},
 {n:6,t:`Exam type question: expected inflation`,k:`r* = 3%; MRP = 0.5%; DRP = 1.5%; LP = 0.5%; going rate on the 1-year corporate bond = 7.5%. Find expected inflation next year. Answer: <b>c, 2.0%</b>.`,
  ex:`Use the master formula and solve for IP: 7.5 = 3 + IP + 0.5 + 1.5 + 0.5, so IP = 2.0%. For a 1-year bond, the inflation premium is just next year's expected inflation. The wrong answers come from forgetting a premium or double-counting one.`,
  hw:[`qslide6|Slide 6 exam question`]},
 {n:7,t:`Yield curve and the term structure of interest rates`,k:`Term structure: relationship between interest rates (yields) and maturities. The yield curve is a graph of the term structure. It can be upward sloping, downward sloping, or relatively flat. (The slide shows the March 2015 Treasury yield curve.)`,
  ex:`Plot yield (vertical) against maturity (horizontal) for securities of the same risk, usually Treasuries. The common shapes: <b>normal</b> (upward sloping), <b>inverted/abnormal</b> (downward sloping), <b>flat</b>, and <b>humped</b> (middle maturities highest). The shape carries information about what investors expect rates to do (slide 11).`,
  hw:[`st1|ST-1 g, h|g,h`]},
 {n:8,t:`Treasury vs. corporate yield curves`,k:`Corporate curves lie above the Treasury curve but are not necessarily parallel. The spread widens as the corporate rating falls. Corporate yields include DRP and LP, so the yield spread = DRP + LP.`,
  ex:`A corporate bond is a Treasury plus extra risk, so its yield = Treasury yield + DRP + LP. The lower the credit rating, the larger the DRP, so a BBB bond's curve sits further above the Treasury curve than an AAA bond's. The spread need not be the same at every maturity.`,
  how:`ST-2 c and e add DRP and LP to a Treasury yield; Problem 6-4 backs DRP out of a corporate and a Treasury yield.`,
  hw:[`p64|Problem 6-4`,`st2|ST-2 c, e|c,e`]},
 {n:9,t:`Relationship between corporate and Treasury yield curves (picture)`,k:`Graph of Treasury, AAA, and BBB yield curves.`,
  ex:`The picture shows what slide 8 describes: Treasury at the bottom, higher-rated corporates above it, and lower-rated corporates higher still, with the gaps (the spreads) bigger for riskier bonds.`,hw:[]},
 {n:10,t:`Exam type question: Treasury yield curve with constant inflation`,k:`r* = 3%; inflation 2% forever; no maturity risk premium. Which is most correct? Answer: <b>c</b>, the Treasury yield curve is flat and all Treasuries yield 5%.`,
  ex:`With no MRP and the same inflation in every year, every Treasury yields r* + IP = 3% + 2% = 5% regardless of maturity, so the curve is flat. A corporate curve doesn't have to be flat (DRP and LP can vary by maturity), so (a) is false and (d) falls with it.`,
  hw:[`qslide10|Slide 10 exam question`]},
 {n:11,t:`What determines the yield curve? Pure Expectations Hypothesis`,k:`The shape depends on expectations about future interest rates. If rates are expected to rise, long-term rates are above short-term (and vice versa). Assumes MRP on Treasuries is zero. Long-term rates are an average of current and future short-term rates. You can "back out" expected future rates.`,
  ex:`Think of a 2-year bond as two 1-year bonds back to back. If investors are indifferent between the two, then the 2-year yield is the average of today's 1-year rate and next year's expected 1-year rate. If you know the yields, you can solve for the expected future rate (next slides). Because a long rate is an average, it moves less than short rates (Question 6-2). Evidence says lenders actually prefer short-term securities, so the real MRP is positive; PEH is a simplification.`,
  hw:[`q62|Question 6-2`,`st1|ST-1 i|i`]},
 {n:12,t:`Example: observed Treasury rates and pure expectations`,k:`If PEH holds, what does the market expect on 1-year securities one year from now? Three-year securities two years from now? Yields: 1 year 6.0%, 2 years 6.2%, 3 years 6.4%, 4 years 6.5%, 5 years 6.5%.`,
  ex:`This sets up the forward-rate question. The idea: a longer-term yield is a geometric average of the shorter-term yield and the unknown forward rate, so you compare two ways of investing for the same total time and solve for the missing piece.`,hw:[]},
 {n:13,t:`One-year forward rate`,k:`(1.062)² = (1.060)(1 + X) → 1.12784 ÷ 1.060 = 1 + X → <b>X = 6.4004%</b>. With an arithmetic average: 6.2% = (6.0% + X) ÷ 2 → X = 6.4%.`,
  ex:`Invest $1 for 2 years at the 2-year rate: (1.062)². Or invest for 1 year at 6.0% and roll it over at the forward rate X: (1.060)(1 + X). Setting them equal gives X = 6.4004%. The arithmetic shortcut is simpler and nearly identical. For longer horizons, generalize: (1 + Y<sub>n</sub>)<sup>n</sup> = (1 + Y<sub>m</sub>)<sup>m</sup>(1 + f)<sup>n−m</sup>, then take the (n − m)-th root.`,
  how:`ST-3 uses the same method with a 3-year and 4-year yield. ST-3a is this slide's question; parts b–d extend it to two-year and three-year forward rates.`,
  hw:[`st3|ST-3 a–d`]},
 {n:14,t:`Another example of expected future interest rates (CDs)`,k:`Bank of America CD rates: 2.8% for 2 years, 2.4% for 1 year. 2-year yield (2.8%) = (1-year (2.4%) + x%) ÷ 2 → 5.6% − 2.4% = <b>x = 3.2%</b>.`,
  ex:`Same idea, arithmetic version: two years of interest at the 2-year rate equals this year's rate plus next year's rate, so x = 2 × 2.8% − 2.4% = 3.2%. (The geometric version gives 3.2016%, which is basically the same.)`,hw:[]},
 {n:15,t:`Exam type question: expected 1-year rate`,k:`1-year bonds yield 4% and 2-year bonds yield 4.5%. Expectations theory holds. Expected 1-year rate one year from today? Answer: <b>b, 5.0%</b>.`,
  ex:`2 × 4.5% − 4% = 5.0%. The wrong answers come from averaging the two yields (4.25%) or adding them.`,
  hw:[`qslide15|Slide 15 exam question`]},
 {n:16,t:`Other factors that influence interest rate levels (section 6.7)`,k:`Federal Reserve policy; federal budget surplus or deficit; level of business activity; international factors.`,
  ex:`<b>Fed policy:</b> more money supply tends to lower short-term rates at first but can raise expected inflation. <b>Deficits:</b> more government borrowing pushes rates up. <b>Business activity:</b> rates rise in expansions and fall in recessions, which matters for choosing between short- and long-term debt. <b>International:</b> a foreign trade deficit is financed by foreign borrowing, which adds to demand for funds and lifts rates.`,
  how:`Question 6-3 asks about borrowing in a recession; Question 6-6 asks about the Fed being forced to expand the money supply.`,
  hw:[`q63|Question 6-3`,`q66|Question 6-6`,`st1|ST-1 j|j`]},
 {n:17,t:`Learning objectives`,k:`Four factors that affect the cost of money; determinants of market rates; real vs. nominal rates; the yield curve and its shapes; calculate the 1-year expected rate one year from now; pure expectations theory and other factors; interest rates and business decisions (text section 6.8). Problems ST-1, ST-3a, 6-2 to 6-6; Questions 6-2, 6-3.`,
  ex:`Your checklist. Everything assigned is covered above. Section 6.8 (interest rates and business decisions) is not in the materials I have; Question 6-3 is the closest example from your list.`,hw:[]}
];


/* ============================================================
   SLIDE MAP v2: slides in lecture order, each with an explanation and the related homework.
   hw entries: "id|label|parts"  (parts = comma list of part letters, or exact part titles for unlettered parts; omit for all)
   ============================================================ */
CHAPTERS.find(c=>c.id==='ch3').slides=[
 {n:2,t:`Sources of information`,k:`Annual reports, Wall Street Journal, internet (Yahoo, SmartMoney, Mergent), SEC EDGAR: 10-K and 10-Q reports.`,
  ex:`Before you can analyze a company you need its numbers. The <b>annual report</b> is the official package; the SEC requires a yearly <b>10-K</b> and quarterly <b>10-Q</b>, and EDGAR is the SEC's free database. News sources add context. For your exam you only need to know what the statements are and how to use them, not where to find them.`,hw:[]},
 {n:3,t:`The annual report`,k:`<b>Balance sheet</b>: snapshot at one date. <b>Income statement</b>: revenues and expenses over a period. <b>Statement of cash flows</b>: cash impact of activities (not on your exam). <b>Statement of stockholders' equity</b>: earnings retained vs. paid as dividends.`,
  ex:`Each statement answers a different question. The balance sheet is a <i>photograph</i>: what the firm owns and owes on one day. The income statement is a <i>video</i>: how profitable it was over a period. The statement of stockholders' equity links the two: <b>Ending retained earnings = Beginning RE + Net income − Dividends</b>, which is exactly what Problem 3-4 uses. Because these numbers are built from accounting rules, Question 3-5 asks whether investors can trust them.`,
  how:`Problem 3-4 runs the retained earnings roll-forward backward to find dividends.`,
  hw:[`q35|Question 3-5 (GAAP)`,`p34|Problem 3-4`,`st1|ST-1 a|a`]},
 {n:4,t:`Overview of D'Leon Inc.`,k:`Snack company that expanded in 2020 with unsatisfactory results: weak cash, suppliers paid late, bank threatening to cut credit, board demanding changes.`,
  ex:`D'Leon is the case your professor uses for slides 5–13. The story: the company grew fast, but cash dried up. The next slides check whether the expansion helped by looking at operating income, working capital, free cash flow, and the stock market's verdict (MVA).`,hw:[]},
 {n:5,t:`Balance sheet: assets (picture)`,k:`Cash, receivables, inventories = current assets; net plant and equipment; total assets.`,
  ex:`The asset side lists what the company owns, from most liquid (cash) to least (fixed assets). <b>Current assets</b> (cash, receivables, inventories) turn into cash within a year. <b>Net plant and equipment</b> is cost minus accumulated depreciation. <b>Total assets = current assets + net fixed assets</b>, so if you know total assets and fixed assets, current assets is what's left.`,
  how:`Problem 3-1c rebuilds this: current assets = total assets − net plant and equipment.`,hw:[`p31|Problem 3-1 c|c`]},
 {n:6,t:`Balance sheet: liabilities and equity (picture)`,k:`Accounts payable, accruals, notes payable = current liabilities; long-term debt; common equity (book value $663,768 in 2020 and $492,592 in 2021).`,
  ex:`This side shows who financed the assets. <b>Current liabilities</b> are due within a year; <b>long-term debt</b> is due later; <b>equity</b> is what stockholders own (paid-in capital plus retained earnings). <b>Assets = Liabilities + Equity</b> always balances. Handy steps when only totals are given: total liabilities = total assets − equity; current liabilities = total liabilities − long-term debt. Also note <b>total debt</b> counts only interest-bearing items (notes payable + long-term debt), not accounts payable or accruals.`,
  hw:[`p31|Problem 3-1 a, b, d, e|a,b,d,e`,`st1|ST-1 b|b`]},
 {n:7,t:`Income statement (picture)`,k:`Sales − costs = EBITDA; − D&amp;A = EBIT; − interest = EBT; − taxes = net income. (D'Leon 2021 EBIT = −$130,948.)`,
  ex:`The income statement walks from sales down to net income. <b>EBITDA</b> is before interest, taxes, depreciation and amortization; subtract D&amp;A (non-cash charges) to get <b>EBIT</b> (operating income); subtract interest to get <b>EBT</b>; subtract taxes to get <b>net income</b>. The exam skill is reading it <i>upward</i>: EBT = NI ÷ (1 − T), EBIT = EBT + interest, D&amp;A = EBITDA − EBIT.`,
  how:`The slide goes down the statement; Problems 3-2, 3-3 and ST-2a go back up from net income.`,
  hw:[`p32|Problem 3-2`,`p33|Problem 3-3`,`st2|ST-2 a|a`,`st1|ST-1 c|c`]},
 {n:8,t:`Other data (picture)`,k:`Number of shares, EPS, DPS, stock price. D'Leon: 100,000 shares; price $8.50 (2020) and $2.25 (2021).`,
  ex:`Per-share data: <b>EPS = net income ÷ shares</b>, <b>DPS = dividends ÷ shares</b>, plus the stock price. The share count and price here are used on slide 13 to compute the market value of the equity.`,hw:[]},
 {n:9,t:`After-tax operating income`,k:`<b>AT operating income = EBIT(1 − T)</b>. D'Leon 2021 = −130,948(0.6) = −$78,569; 2020 = $114,257.`,
  ex:`Did the expansion add operating profit? <b>NOPAT = EBIT(1 − T)</b> uses EBIT so financing (interest) is ignored and you judge only operations. D'Leon's NOPAT fell from +$114,257 to −$78,569, so the answer is no. (D'Leon's tax rate is 40%, so 1 − T = 0.6.) This is the first bracket of the FCF formula on slide 11.`,
  how:`In ST-2d, Rattner's NOPAT = 5(1 − 0.25) = $3.75M, the same step.`,hw:[`st1|ST-1 d|d`]},
 {n:10,t:`Effect on net operating working capital (picture)`,k:`NOWC = (current assets − excess cash) − (current liabilities − notes payable).`,
  ex:`<b>NOWC</b> is the money tied up in day-to-day operations: operating current assets minus operating current liabilities. Operating liabilities are only accounts payable and accruals, so notes payable (interest-bearing debt) is removed. With no excess cash, <b>NOWC − NWC = notes payable</b>. When NOWC grows (more inventory and receivables), cash is tied up, which lowers free cash flow.`,
  how:`Problem 3-1 f–h asks for NWC, NOWC, and the reason they differ; ST-2 b–c repeat it with Rattner's numbers.`,
  hw:[`p31|Problem 3-1 f, g, h|f,g,h`,`st2|ST-2 b, c|b,c`]},
 {n:11,t:`Free cash flow for 2021`,k:`<b>FCF = [EBIT(1 − T) + D&amp;A] − [CapEx + ΔNOWC]</b>. D'Leon 2021 = −$744,201. Negative FCF is not always bad.`,
  ex:`FCF is the cash left after paying for the investment needed to run and grow the business. The left bracket is cash from operations (NOPAT plus the non-cash D&amp;A added back); the right bracket is reinvestment (capital expenditures plus the increase in NOWC). D'Leon's FCF is hugely negative because operating profit was negative <i>and</i> it invested heavily. Negative FCF is not automatically bad for a growing firm if the investments pay off.`,
  how:`The slide gives CapEx and ΔNOWC. In ST-2d you first compute CapEx = Δ net plant + depreciation, and ΔNOWC = 0.`,
  hw:[`st2|ST-2 d|d`]},
 {n:12,t:`Performance measures for evaluating managers`,k:`<b>MVA</b> = P<sub>0</sub> × shares − book value of common equity. <b>EVA</b> = estimate of true economic profit for the year.`,
  ex:`Accounting statements use book values, which don't show how investors value the firm. <b>MVA</b> compares the market value of equity (price × shares) to the book value; positive MVA means management added wealth. <b>EVA</b> measures the year's economic profit: NOPAT minus the dollar cost of all the capital used.`,
  how:`Question 3-9 asks how management actions show up in EVA and MVA, and how the two are connected.`,
  hw:[`q39|Question 3-9`,`st1|ST-1 e|e`]},
 {n:13,t:`D'Leon's MVA in 2020 and 2021`,k:`MVA<sub>20</sub> = ($8.50 × 100,000) − $663,768 = $186,232. MVA<sub>21</sub> = ($2.25 × 100,000) − $492,592 = −$267,592.`,
  ex:`2020: the market valued the equity at $850,000 against a book value of $663,768, so MVA was +$186,232. 2021: the stock fell to $2.25, so market value was only $225,000 against book $492,592, giving MVA of −$267,592. Negative MVA means shareholder wealth was destroyed. The <i>change</i> in MVA year to year is also what the board watches.`,
  how:`The slide gives price and shares and finds MVA. Problem 3-5 gives MVA and price and finds the shares: (book + MVA) ÷ price.`,
  hw:[`p35|Problem 3-5`]},
 {n:14,t:`Federal income tax system (picture)`,k:`Tax brackets table.`,
  ex:`A progressive system taxes income in slices. Each slice is taxed at its own bracket rate, and only the top slice is taxed at the highest rate. The <b>marginal rate</b> is the rate on your next dollar; the <b>average rate</b> is total tax ÷ taxable income, always lower than the marginal rate in a progressive system.`,
  how:`Question 3-10 asks you to explain "our tax rates are progressive" with a bracket example.`,hw:[`q310|Question 3-10`]},
 {n:15,t:`Corporate and personal taxes`,k:`Both have a progressive structure: the higher the income, the higher the marginal tax rate. Corporations pay federal and (in some states) state taxes.`,
  ex:`The same idea applies to corporations and individuals. In your textbook's problems, corporate taxes are simplified to a flat rate (25% in most problems), so you won't need brackets for corporations.`,
  hw:[`st1|ST-1 f, j|f,j`]},
 {n:16,t:`Tax treatment of various uses and sources of funds`,k:`Interest paid: deductible for corporations. Interest earned: fully taxable (muni exception). Dividends paid: from after-tax income. Dividends received: taxed for individuals; part excluded for corporations.`,
  ex:`The tax code shapes how firms finance themselves. A corporation deducts the <b>interest</b> it pays, so debt is cheaper after tax. <b>Dividends</b> are paid from income that was already taxed and are not deductible. That tilt toward debt is why a dollar of interest costs less pretax income than a dollar of dividends ($1 vs. $1.33 at a 25% rate).`,hw:[]},
 {n:17,t:`Tax treatment (continued)`,k:`Double taxation of dividends; a portion of dividends received by corporations is excluded to avoid triple taxation.`,
  ex:`Corporate earnings are taxed once as corporate income and again when paid as dividends to individuals: <b>double taxation</b>. If one corporation owns another's stock, part of the dividends it receives is excluded from its taxable income so the same earnings are not taxed a third time (<b>triple taxation</b>). Your textbook uses a 50% exclusion.`,hw:[]},
 {n:18,t:`More tax issues`,k:`Tax loss carry-back and carry-forward; capital gains (ordinary rates if held 1 year or less, capital gains rate if longer).`,
  ex:`Corporate income swings from year to year, so a <b>loss</b> can offset profits in other years (your textbook describes the carryforward, capped at 80% of a year's taxable income). A <b>capital gain</b> is profit from selling an asset for more than you paid; individuals pay ordinary rates if held one year or less and lower rates if held longer.`,
  hw:[`st1|ST-1 g, h, i|g,h,i`]},
 {n:19,t:`Learning objectives`,k:`Know the annual report, balance sheet, income statement, FCF, MVA, and taxes (not the statement of cash flows). Assigned: ST-1, ST-2 a–d; Questions 3-1 to 3-5, 3-7, 3-9, 3-10; Problems 3-1, 3-2, 3-3, 3-5.`,
  ex:`This is your study checklist. Work the homework in slide order using this tab, and use the Flashcards and Quiz tabs to drill formulas.`,hw:[]}
];

CHAPTERS.find(c=>c.id==='ch4').slides=[
 {n:2,t:`Why ratios are useful`,k:`Ratios standardize numbers and make comparisons easier; they highlight strengths and weaknesses. Compare through time (trend) and with competitors (peer or industry).`,
  ex:`A $10M profit means different things for a $100M firm and a $10B firm. A ratio divides one number by another so firms of any size can be compared. Use ratios two ways: against the firm's own past (<b>trend analysis</b>) and against competitors (<b>peer/industry analysis</b>). Never judge a firm from one ratio.`,hw:[]},
 {n:3,t:`The five categories of ratios`,k:`Liquidity (can we pay?), asset management (right amount of assets?), debt management (right mix?), profitability (prices vs. costs), market value (do investors like it?).`,
  ex:`Each category answers one question, and they build on each other. <b>Liquidity</b>: current, quick. <b>Asset management</b>: inventory turnover, DSO, fixed assets and total assets turnover. <b>Debt management</b>: debt to capital, TIE. <b>Profitability</b>: operating margin, profit margin, BEP, ROA, ROE. <b>Market value</b>: P/E, M/B.`,hw:[]},
 {n:4,t:`Balance sheet: assets (picture)`,k:`D'Leon's cash, receivables, inventories, net fixed assets.`,
  ex:`The asset side feeds the liquidity and asset-management ratios (current assets, inventories, receivables, fixed assets, total assets). In balance-sheet puzzles, cash is often the "plug": total assets minus everything else.`,
  hw:[`p422|Problem 4-22 f|f`]},
 {n:5,t:`Balance sheet: liabilities and equity (picture)`,k:`Accounts payable, notes payable, long-term debt, equity.`,
  ex:`The liabilities and equity side feeds the debt ratios and ROE. <b>Total debt = notes payable + long-term debt</b> (interest-bearing only). In a puzzle, the last equity line is often the plug: total liabilities and equity must equal total assets.`,
  hw:[`p422|Problem 4-22 h|h`]},
 {n:6,t:`Income statement: D'Leon 2021 vs. 2022E`,k:`Sales 6,034,000 → 7,035,600. EBIT (130,948) → 492,648. Interest 136,012 → 70,008. Net income (160,176) → 253,584.`,
  ex:`Actual 2021 vs. forecast 2022E. EBIT swings from a $130,948 loss to a $492,648 profit, and interest falls by about half. These figures feed the margins, TIE (EBIT ÷ interest), ROA and ROE (net income), and BEP (EBIT).`,hw:[]},
 {n:7,t:`Other data (picture)`,k:`Shares, EPS, stock price.`,
  ex:`Used for the market value ratios on slide 24: P/E needs price and EPS; M/B needs price and book value per share (equity ÷ shares).`,hw:[]},
 {n:8,t:`Forecast current ratio and quick ratio (picture)`,k:`<b>Current = CA ÷ CL.</b> <b>Quick = (CA − inventories) ÷ CL.</b>`,
  ex:`Both test whether the firm can pay what is due within a year. The <b>current ratio</b> compares all current assets with current liabilities. The <b>quick ratio</b> removes inventory because it is the hardest current asset to turn into cash quickly. In homework, a change to inventory moves the current ratio but not the quick ratio.`,
  how:`Problem 4-15 changes inventory (and asks for the new quick ratio), Problem 4-19 solves how much notes payable can rise before the current ratio hits 2.0, and Problem 4-22 uses the current ratio to find current liabilities.`,
  hw:[`p415|Problem 4-15`,`p419|Problem 4-19`,`p422|Problem 4-22 g|g`,`pbarry|Barry: current, quick|Current ratio,Quick ratio`]},
 {n:9,t:`Comments on liquidity ratios`,k:`D'Leon 2022E: current 2.34× (industry 2.70×); quick 0.84× (1.00×). Expected to improve but still below the industry average. Liquidity is weak.`,
  ex:`Interpretation: 2021 was a crisis (current 1.20×, quick 0.39×), 2022E recovers to roughly the 2020 level, but D'Leon is still below the industry. Remember that very high ratios are not automatically good either (idle cash, old inventory).`,hw:[]},
 {n:10,t:`Inventory turnover vs. the industry`,k:`Slide: <b>Sales ÷ Inventories</b> = 7,036 ÷ 1,716 = 4.10× (industry 6.1×). Your textbook: <b>COGS ÷ Inventories</b>.`,
  ex:`Inventory turnover is how many times inventory is sold and replaced in a year. Low turnover means too much inventory, or inventory that is old or obsolete. D'Leon's 4.1× vs. 6.1× suggests poor inventory control. <b>Careful:</b> the slide divides Sales by inventory, but the textbook divides cost of goods sold by inventory because inventory is carried at cost.`,
  how:`Problem 4-22 gives a gross margin so you can find COGS; that only works with the textbook version. Ask your professor which one the exam expects.`,
  hw:[`p422|Problem 4-22 c, d|c,d`,`pbarry|Barry: inventory turnover|Inventory turnover`]},
 {n:11,t:`DSO: days after a sale before receiving cash`,k:`<b>DSO = Receivables ÷ (Annual sales ÷ 365)</b> = 878 ÷ (7,036 ÷ 365) = 45.6 days (industry 32).`,
  ex:`DSO is the average number of days it takes customers to pay. Step 1: average sales per day = annual sales ÷ 365. Step 2: receivables ÷ that. D'Leon's 45.6 days vs. 32 means it collects slowly (and is getting worse). Compare DSO with the firm's own credit terms too. In homework you often run it backward: receivables = DSO × (sales ÷ 365).`,
  how:`Problem 4-1 solves for receivables from DSO; Problem 4-20 changes DSO and sales at the same time; Problem 4-22 finds receivables from a DSO of 36.5.`,
  hw:[`p41|Problem 4-1`,`p420|Problem 4-20`,`p422|Problem 4-22 b|b`,`pbarry|Barry: DSO|Days sales outstanding`]},
 {n:12,t:`Fixed assets and total assets turnover`,k:`<b>FA turnover = Sales ÷ Net fixed assets</b> = 7,036 ÷ 817 = 8.61×. <b>TA turnover = Sales ÷ Total assets</b> = 7,036 ÷ 3,497 = 2.01×.`,
  ex:`Turnover ratios ask how many dollars of sales each dollar of assets produces. <b>FA turnover</b> looks at plant and equipment; <b>TA turnover</b> looks at all assets. Higher is better (assets used harder). Working backward is common: if you know TA turnover and total assets, sales = turnover × assets.`,
  how:`Problem 4-22 flips these: given the turnovers, find sales and fixed assets. Problem 4-14 uses TA turnover to find total assets from sales.`,
  hw:[`p422|Problem 4-22 a, e|a,e`,`pbarry|Barry: TA turnover|Total assets turnover`]},
 {n:13,t:`Evaluating FA and TA turnover`,k:`D'Leon 2022E: FA turnover 8.6× (industry 7.0×); TA turnover 2.0× (2.6×). Low TA turnover is caused by excess current assets (A/R and inventory).`,
  ex:`Reasoning: FA turnover is above the industry, so plant is used well; TA turnover is below, so the extra assets must be in current assets, specifically receivables and inventory (the same problems seen on slides 10 and 11).`,hw:[]},
 {n:14,t:`Debt ratio and times interest earned`,k:`<b>Debt ratio = Total debt ÷ Total capital</b> = (300,000 + 400,000) ÷ (700,000 + 1,952,352) = 26.4%. <b>TIE = EBIT ÷ Interest</b> = 492.6 ÷ 70 = 7.0×.`,
  ex:`The debt ratio is the share of the firm's capital provided by debt: total debt = notes payable + long-term debt (not accounts payable), and total capital = total debt + equity. <b>TIE</b> shows how many times operating profit covers interest; it uses EBIT because interest is paid before taxes.`,
  how:`Problem 4-2 asks for the same ratio, but you must first get equity from price × shares (M/B = 1).`,
  hw:[`p42|Problem 4-2`,`pbarry|Barry: TIE, debt to capital|Times interest earned,Debt to total capital`]},
 {n:15,t:`Debt management vs. the industry`,k:`D'Leon 2022E: debt ratio 26.4% (industry 30.0%); TIE 7.0× (6.2×). Both better than the industry.`,
  ex:`Interpretation: less debt and better interest coverage than the industry means lower bankruptcy risk. Compare with 2021, when the debt ratio was 73.4% and TIE was −1.0× (EBIT couldn't cover interest).`,hw:[]},
 {n:16,t:`Exam question: short-term creditor`,k:`Choose the combination of current ratio, TIE, and debt ratio a short-term creditor prefers. Slide answer: <b>c</b> (1.5, 1.5, 0.50).`,
  ex:`A short-term creditor cares about getting paid soon, so wants strong liquidity and interest coverage with modest debt. Option (c) pairs a current ratio of 1.5 and TIE of 1.5 with a moderate 0.50 debt ratio. Option (a) has a current ratio of only 0.5. Option (d) has a high debt ratio (0.67) and a TIE of just 1.0 even though its current ratio is 2.0.`,
  hw:[`qslide16|Slide exam question`]},
 {n:17,t:`Operating margin, profit margin, and BEP`,k:`<b>Operating margin = EBIT ÷ Sales.</b> <b>Profit margin = NI ÷ Sales.</b> <b>BEP = EBIT ÷ Total assets.</b>`,
  ex:`The two margins tell how much of each sales dollar becomes profit: operating margin before interest and taxes, profit margin after. <b>BEP</b> is the raw earning power of the assets, before taxes and financing, so it is the fairest way to compare firms with different debt and tax situations. Important for Question 4-17: BEP does <i>not</i> depend on taxes, the interest rate, or the debt ratio.`,
  how:`Problems 4-16 and Question 4-17 (on slide 22) are the BEP problems, because they connect BEP to leverage.`,
  hw:[`pbarry|Barry: profit margin|Profit margin`]},
 {n:18,t:`Appraising profitability (table)`,k:`D'Leon 2022E: operating margin 7.0% (industry 7.3%); profit margin 3.6% (3.5%); BEP 14.1% (19.1%).`,
  ex:`Read each ratio against the industry: operating margin slightly low, profit margin slightly high, BEP well below. Profit margin looks good partly because of lower interest; BEP, which ignores financing, exposes the weaker operations.`,hw:[]},
 {n:19,t:`Appraising profitability (comments)`,k:`Operating margin was very bad in 2021; BEP removes the effects of taxes and financial leverage.`,
  ex:`Bottom line: operations improved sharply from 2021 but still trail the industry. BEP is the cleanest measure for comparison because it strips out taxes and leverage.`,hw:[]},
 {n:20,t:`ROA and ROE`,k:`<b>ROA = NI ÷ Total assets</b> = 253.6 ÷ 3,497 = 7.3%. <b>ROE = NI ÷ Total common equity</b> = 253.6 ÷ 1,952 = 13.0%.`,
  ex:`<b>ROA</b> is return on everything the firm owns; <b>ROE</b> is return on the stockholders' money only. ROE is larger when the firm uses debt because the same profit is spread over less equity: <b>ROE = ROA × equity multiplier</b>. (<b>ROIC</b> = EBIT(1 − T) ÷ total invested capital is the textbook's measure of return to all investors.)`,
  how:`Problem 4-14 computes ROE from a new capital structure (assets from turnover, equity from the debt ratio, net income from EBIT and interest).`,
  hw:[`p414|Problem 4-14`,`pbarry|Barry: ROA, ROE, ROIC|ROA,ROE,ROIC`]},
 {n:21,t:`Appraising ROA and ROE`,k:`D'Leon: ROA 7.3% (industry 9.1%); ROE 13.0% (18.2%). Wide swings in ROE show the effect of leverage.`,
  ex:`Both rebounded from 2021 but are still below the industry. Note how wild ROE was (−32.5% in 2021): high debt magnifies losses just as it magnifies gains.`,hw:[]},
 {n:22,t:`Effects of debt on ROA and ROE`,k:`Assets constant, more debt: equity falls, interest rises, net income falls, <b>ROA falls</b>, ROE may go up or down.`,
  ex:`Hold total assets fixed and swap equity for debt: equity shrinks, interest expense rises, net income falls. ROA (net income ÷ assets) falls. ROE can go either way, because both net income and equity fall. If assets earn more than the interest rate (BEP above the cost of debt), ROE rises; that's Problem 4-16 and Question 4-17a.`,
  how:`Problem 4-16 shows debt raising ROE (34.93% vs. 26.25%). Question 4-17 then tests which statements about BEP are true; work 4-16 first.`,
  hw:[`p416|Problem 4-16`,`q417|Question 4-17`]},
 {n:23,t:`Problems with ROE`,k:`ROE ignores risk and the amount of capital invested; relying on it can lead managers to reject good projects. EVA is an alternative.`,
  ex:`Three problems: (1) ROE ignores <b>risk</b>; (2) it ignores the <b>size of capital</b> (45% on $1,000,000 can beat 50% on $50,000); (3) managers judged on ROE may <b>turn down profitable projects</b> that lower their average ROE. EVA = Equity × (ROE − cost of equity) fixes this by including size and risk. Concept only; there is no numeric homework, so use the Summary (4.8) and Flashcards.`,hw:[]},
 {n:24,t:`Price/earnings and market/book ratios`,k:`<b>P/E = Price ÷ EPS</b> = 12.17 ÷ 1.014 = 12.0×. <b>M/B = Price ÷ (Equity ÷ Shares)</b> = 12.17 ÷ (1,952 ÷ 250) = 1.56×.`,
  ex:`<b>P/E</b> is how many dollars investors pay for $1 of earnings. <b>M/B</b> compares market price with book value per share (BVPS = equity ÷ shares). In homework you often need one more step: M/B × BVPS gives price, then price ÷ EPS gives P/E. (<b>EV/EBITDA</b> = enterprise value ÷ EBITDA is the textbook's third market ratio; EV = equity market value + debt − cash.)`,
  how:`Problem 4-5 gives M/B and BVPS and asks for P/E; Problem 4-4 asks for M/B and EV/EBITDA; Problem 4-21 holds P/E constant to project next year's price.`,
  hw:[`p44|Problem 4-4`,`p45|Problem 4-5`,`p421|Problem 4-21`,`pbarry|Barry: M/B, P/E, EV/EBITDA|Market/book,P/E,EV/EBITDA`]},
 {n:25,t:`Analyzing the market value ratios`,k:`Higher is better. P/E and M/B are high if ROE is high and risk is low.`,
  ex:`Investors pay more per dollar of earnings or book value for firms with good returns, growth, and low risk. D'Leon's 2022E ratios (12.0× and 1.56×) are below the industry (14.2× and 2.4×).`,hw:[]},
 {n:26,t:`The DuPont equation`,k:`Focuses on expense control (PM), asset utilization (TA TO), and debt utilization (equity multiplier).`,
  ex:`DuPont breaks ROE into three levers you can manage: <b>profit margin</b> (cost control and pricing), <b>total assets turnover</b> (use of assets), and the <b>equity multiplier</b> (use of debt). It shows <i>why</i> ROE is high or low.`,hw:[]},
 {n:27,t:`DuPont: breaking down ROE`,k:`<b>ROE = (NI ÷ Sales) × (Sales ÷ TA) × (TA ÷ Equity)</b>. D'Leon 2022E: 3.6% × 2.0 × 1.8 = 13.0%.`,
  ex:`Multiply the three pieces to get ROE. Useful identities: <b>ROA = PM × TATO</b>, <b>ROE = ROA × EM</b>, and <b>EM = 1 + Debt/Equity</b>. In the table, 2021's equity multiplier of 5.8 magnified the negative margin into an ROE of −32.5%. (The slide labels the years 2015–2017E, but the ROE values match D'Leon's 2020, 2021 and 2022E.)`,
  how:`Problem 4-3 runs DuPont backward: TATO = ROA ÷ PM and EM = ROE ÷ ROA.`,
  hw:[`p43|Problem 4-3`]},
 {n:28,t:`The DuPont system`,k:`Shows how profit margin, asset turnover, and the equity multiplier combine to determine ROE.`,
  ex:`Same equation, restated: expense control × asset utilization × debt utilization. Management can raise ROE by cutting costs, using assets harder, or (with more risk) using more debt.`,hw:[]},
 {n:29,t:`Exam question: equity multiplier of 4.0`,k:`Total liabilities ÷ assets = 1 − 1/EM = <b>0.75</b> (answer d).`,
  ex:`EM = assets ÷ equity = 4, so equity ÷ assets = 1/4 = 0.25. Liabilities are the rest of the assets: 1 − 0.25 = 0.75.`,
  hw:[`qslide29|Slide exam question`]},
 {n:30,t:`Exam question: Merriam Company`,k:`ROE 15%, liabilities/assets 0.35, TATO 2.8 → profit margin <b>3.48%</b> (answer a).`,
  ex:`Use DuPont: ROE = PM × TATO × EM. Liabilities/assets = 0.35 means equity/assets = 0.65, so EM = 1 ÷ 0.65 = 1.5385. Then PM = 0.15 ÷ (2.8 × 1.5385) = 3.48%.`,
  hw:[`qslide30|Slide exam question`]},
 {n:31,t:`Limitations of ratio analysis`,k:`Conglomerates are hard to compare; "average" isn't necessarily good; seasonality; window dressing; different accounting practices; hard to call a ratio good or bad.`,
  ex:`Ratios are a starting point, not a verdict. Industry averages are meaningless for firms with divisions in different industries; "average" isn't a goal; seasonal swings and <b>window dressing</b> distort numbers; and accounting differences make firms hard to compare. The Barry Computer comparison is a good practice case for reading ratios against an industry.`,
  hw:[`qbarry|Barry comments`]},
 {n:32,t:`Learning objectives`,k:`Calculate and interpret all ratios, including DuPont; discuss limitations and the problems with ROE. The exam comes with a page of Chapter 4 formulas. Assigned: 4-1 to 4-14 and 4-22.`,
  ex:`Because a formula page comes with the exam, the skill is choosing the right formula and working backward from ratios (as in 4-1, 4-3, 4-5, 4-22). Practice in slide order using this tab.`,hw:[]}
];

CHAPTERS.find(c=>c.id==='ch5').slides=[
 {n:2,t:`Time line`,k:`Shows the timing of cash flows. Tick marks are the end of periods: Time 0 is today; Time 1 is the end of period 1.`,
  ex:`A time line is a picture of the problem: draw a line, mark Time 0 (today), 1, 2, 3, write the interest rate above it and each cash flow below its tick (use ? for the unknown). Each tick is both the end of one period and the start of the next. So with today = Jan 1, 2021, a payment on Jan 1, 2022 sits at Time 1. Drawing it first prevents most timing mistakes.`,
  how:`ST-2 and ST-3 depend on counting periods from dates; Problem 5-10e asks you to draw a time line and explain present value.`,
  hw:[`p510|Problem 5-10 e|e`,`st1|ST-1 a|a`]},
 {n:3,t:`Drawing time lines (picture)`,k:`$100 lump sum due in 2 years; 3-year $100 ordinary annuity.`,
  ex:`Two common shapes. A <b>lump sum</b> is one cash flow at one date ($100 at Time 2). An <b>ordinary annuity</b> is the same payment at the end of every period ($100 at Times 1, 2, 3). If the first payment were at Time 0, it would be an annuity due.`,
  hw:[`p56|Problem 5-6 a|a`]},
 {n:4,t:`Uneven cash flow time line (picture)`,k:`CF<sub>0</sub> = −$50, CF<sub>1</sub> = $100, CF<sub>2</sub> = $75, CF<sub>3</sub> = $50.`,
  ex:`Uneven cash flows differ from period to period. Negative numbers are money you pay out (here, $50 at Time 0). The annuity shortcuts don't apply, so you value each cash flow separately (slide 14).`,
  hw:[`p57|Problem 5-7`]},
 {n:5,t:`Future value of $100 after 3 years at 10%`,k:`Compounding. FV = $133.10 (by arithmetic or calculator).`,
  ex:`<b>Compounding</b> means interest earns interest. $100 at 10%: after year 1, $110; after year 2, $121; after year 3, $133.10. Going forward in time from PV to FV is compounding. You can multiply by 1.10 three times or use the formula and calculator on the next slide.`,
  hw:[`st2|ST-2 a|a`,`p51|Problem 5-1`,`st1|ST-1 c, d|c,d`]},
 {n:6,t:`FV formula and calculator`,k:`<b>FV<sub>n</sub> = PV(1 + i)<sup>n</sup></b>. $100 × 1.1³ = $133.10. Calculator: N=3, I/YR=10, PMT=0, PV=−100 → FV = 133.10 (P/YR = 1, END mode).`,
  ex:`Multiply by (1 + i) once per period, which gives (1 + i)<sup>n</sup>. On the calculator, enter any four of the five TVM values and solve for the fifth. Set 1 payment per year and END mode first. PV is entered negative (money going out), so FV comes back positive; PMT = 0 because there are no recurring payments.`,
  how:`Problems 5-9 and 5-10 (parts a, b) use exactly these inputs with different numbers.`,
  hw:[`p59|Problem 5-9 a, b|a,b`,`p510|Problem 5-10 a, b|a,b`,`p523|Problem 5-23 a|a`,`st1|ST-1 b|b`]},
 {n:7,t:`Present value`,k:`<b>PV = FV<sub>n</sub> ÷ (1 + i)<sup>n</sup></b> = 100 ÷ 1.1³ = $75.13. Discounting is the reverse of compounding.`,
  ex:`Present value is what a future amount is worth today. Divide by (1 + i)<sup>n</sup>. $100 due in 3 years at 10% is worth $75.13 today, because $75.13 invested at 10% grows to $100. The rate you use is your <b>opportunity cost</b> (what you could earn elsewhere with similar risk). <b>Longer time or a higher rate makes PV smaller</b>, a favorite exam topic.`,
  how:`ST-3c compares two offers by finding each one's value at the same date.`,
  hw:[`p52|Problem 5-2`,`st3|ST-3 a, c|a,c`,`st1|ST-1 e|e`]},
 {n:8,t:`Present value on the calculator`,k:`N=3, I/YR=10, PMT=0, FV=100 → PV = −75.13.`,
  ex:`Same five keys, but now FV is the known value and PV is the unknown. PV comes out negative because you would have to pay $75.13 today to receive $100 in 3 years.`,
  hw:[`p59|Problem 5-9 c, d|c,d`,`p510|Problem 5-10 c, d|c,d`]},
 {n:9,t:`Solving for N`,k:`Sales growing 20% a year double in <b>3.8 years</b> (I/YR=20, PV=−1, FV=2, CPT N).`,
  ex:`When you know PV, FV, and the rate, the calculator finds how long it takes. For "doubling" problems the starting amount doesn't matter: use PV = −1 and FV = 2. At 20% growth, sales double in about 3.8 years. Higher rate means shorter time. If there are also regular payments, enter them as PMT.`,
  how:`Problems 5-4 and 5-13 are the same doubling setup; Problem 5-5 adds a $5,000 yearly payment.`,
  hw:[`p54|Problem 5-4`,`p513|Problem 5-13`,`p55|Problem 5-5`]},
 {n:10,t:`Solving for I`,k:`$100 grows to $125.97 in 3 years → <b>8%</b> (N=3, PV=−100, FV=125.97, CPT I/YR).`,
  ex:`With PV, FV, and N known, solve for the rate: I = (FV ÷ PV)<sup>1/N</sup> − 1, or CPT I/YR on the calculator. The same math finds a <i>growth rate</i> for sales or earnings. Never divide total growth by years (100% over 5 years is not 20% a year): compounding makes it 14.87%.`,
  how:`Problems 5-3, 5-11 and 5-12 and ST-3d use this setup; the "borrow" version in 5-12 just flips the signs.`,
  hw:[`p53|Problem 5-3`,`p511|Problem 5-11`,`p512|Problem 5-12 a–c|a,b,c`,`st3|ST-3 d|d`]},
 {n:11,t:`Ordinary annuity vs. annuity due`,k:`Ordinary: payments at the end of each period. Due: payments at the beginning. (Annuity due is not on your exam.)`,
  ex:`The only difference is timing. An <b>ordinary annuity</b> pays at the end of each period (the default). An <b>annuity due</b> pays at the beginning, so every payment earns one extra period of interest: <b>value = ordinary value × (1 + i)</b>. Your professor said annuity due is not required, but these parts appear in the assigned problems.`,
  hw:[`p56|Problem 5-6 b|b`,`st2|ST-2 d|d`,`p514|Problem 5-14 d|d`,`p515|Problem 5-15 d|d`,`st1|ST-1 f|f`]},
 {n:12,t:`FV of a 3-year ordinary annuity of $100 at 10%`,k:`<b>$331.00</b> (N=3, I/YR=10, PMT=−100, PV=0, CPT FV).`,
  ex:`The future value of an annuity is the value at the end of the last payment. First payment compounds for 2 years ($121), second for 1 year ($110), the last for none ($100): total $331. Formula: FVA = PMT × [(1 + i)<sup>N</sup> − 1] ÷ i. On the calculator: PV = 0 (nothing up front), PMT = −payment, solve FV. To find the <i>payment</i> needed to reach a goal, solve for PMT instead.`,
  how:`Problem 5-14 and ST-2c are this exact setup; ST-2e and ST-3b solve for PMT; ST-3e solves for the rate.`,
  hw:[`p514|Problem 5-14 a–c|a,b,c`,`st2|ST-2 c, e|c,e`,`st3|ST-3 b, e|b,e`]},
 {n:13,t:`PV of a 3-year ordinary annuity of $100 at 10%`,k:`<b>$248.69</b> (N=3, I/YR=10, PMT=100, FV=0, CPT PV).`,
  ex:`The present value of an annuity is the sum of each payment discounted: 90.91 + 82.64 + 75.13 = $248.69. The calculator does it with PMT and FV = 0. The same five keys also give the <b>loan amount</b> you can afford, the <b>rate</b> built into a payment stream (CPT I/YR), or the <b>payment</b> that a given balance supports (CPT PMT, as in retirement withdrawals).`,
  how:`Problem 5-15 is this setup. Problems 5-12d and 5-17 solve for the rate; Problem 5-19c solves for the withdrawal.`,
  hw:[`p515|Problem 5-15 a–c|a,b,c`,`p512|Problem 5-12 d|d`,`p517|Problem 5-17`,`p519|Problem 5-19 c|c`]},
 {n:14,t:`PV of an uneven cash flow stream`,k:`100/1.1 + 300/1.1² + 300/1.1³ − 50/1.1⁴ = <b>$530.08</b>.`,
  ex:`Discount each cash flow back to Time 0 separately, then add. The negative flow subtracts. (On a calculator use the CF worksheet: enter CF0, each cash flow and how many times it repeats, then NPV.) To get a future value, compound the PV to the last date: FV = PV × (1 + i)<sup>N</sup>.`,
  how:`Problem 5-18 values two streams; the stream that pays more earlier is worth more.`,
  hw:[`p518|Problem 5-18`,`st1|ST-1 g|g`]},
 {n:15,t:`The power of compound interest`,k:`A 20-year-old saves $1,095 a year (end of year) at 12%. How much at 65?`,
  ex:`This sets up a saver who deposits $1,095 at the end of each year at 12%. Because the deposits are equal and annual, it is an ordinary annuity with N = 45 (age 20 to 65). The next two slides solve it and then compare starting at 40.`,hw:[]},
 {n:16,t:`FV savings problem`,k:`N=45, I/YR=12, PMT=−1,095 → <b>$1,487,262</b>.`,
  ex:`She deposits only 45 × $1,095 = $49,275, yet ends with about $1.49 million: nearly all of it is interest earned on interest. Problem 5-19 uses the same idea for a client saving $8,000 a year.`,
  hw:[`p519|Problem 5-19 a|a`]},
 {n:17,t:`If you wait until age 40`,k:`N=25 → <b>$146,001</b>, which is $1.3 million less. Lesson: start saving early.`,
  ex:`Starting 20 years later cuts her deposits by only $21,900 but cuts the final balance by more than $1.3 million. Time matters more than the amount saved. Problem 5-19b compares retiring at 70 rather than 65 for the same reason.`,
  hw:[`p519|Problem 5-19 b|b`]},
 {n:18,t:`More frequent compounding`,k:`FV is larger with more frequent compounding. $100, 3 years, 10%: annual $133.10 vs. semiannual $134.01.`,
  ex:`If interest is credited more often, it starts earning interest sooner. Semiannual compounding at a 10% nominal rate means 5% per half-year for 6 periods: 100(1.05)<sup>6</sup> = $134.01. Always use <b>periodic rate = nominal ÷ m</b> and <b>N = years × m</b>. The gains from more frequent compounding get smaller each time.`,
  how:`Problem 5-23 shows the whole pattern for $500 at 12%; Question 5-23f asks why.`,
  hw:[`st2|ST-2 b|b`,`p523|Problem 5-23 b–e|b,c,d,e`,`q523f|Question 5-23f`,`st1|ST-1 h|h`]},
 {n:19,t:`Classifications of interest rates`,k:`Nominal (quoted, APR) rate; <b>EAR = (1 + i<sub>NOM</sub> ÷ m)<sup>m</sup> − 1</b>. 10% semiannual: 10.25%.`,
  ex:`The <b>nominal rate (APR)</b> is the quoted rate and ignores compounding within the year. The <b>effective annual rate (EAR)</b> is what you actually earn after compounding. Example: 10% compounded semiannually is (1.05)<sup>2</sup> − 1 = 10.25%. An investor is indifferent between 10.25% annually and 10% compounded semiannually.`,
  hw:[`st3|ST-3 g|g`,`p58|Problem 5-8 b|b`,`st1|ST-1 i|i`]},
 {n:20,t:`Why effective rates matter`,k:`EAR at a 10% nominal rate: annual 10.00%, quarterly 10.38%, monthly 10.47%, daily 10.52%.`,
  ex:`To compare investments or loans with different compounding, put each on an EAR basis. A 10% rate with monthly payments really costs (or earns) 10.47%. Problem ST-4 uses this: find the EAR of one bank, then the nominal rate another bank needs to match it.`,
  hw:[`st4|ST-4`]},
 {n:21,t:`When is each rate used?`,k:`i<sub>NOM</sub>: contracts, not calculations. i<sub>PER</sub>: calculations and time lines. EAR: comparisons, and annuity payments that don't match compounding.`,
  ex:`<b>Nominal</b>: the rate written in contracts; never used directly in calculations. <b>Periodic (i<sub>PER</sub>)</b>: nominal ÷ m, used in formulas and time lines. <b>EAR</b>: used to compare, and when payments don't line up with compounding periods. If m = 1 all three are the same.`,
  hw:[`p524|Problem 5-24`]},
 {n:22,t:`FV of $100 after 3 years, 10%: semiannual and quarterly`,k:`Semiannual: 100(1.05)⁶ = $134.01. Quarterly: 100(1.025)¹² = $134.49.`,
  ex:`Quarterly: 10% ÷ 4 = 2.5% per quarter for 12 quarters gives $134.49, a little more than semiannual's $134.01. Same pattern as slide 18, and the same method as Problem 5-23.`,hw:[]},
 {n:23,t:`Can the effective rate equal the nominal rate?`,k:`Yes, only with annual compounding (m = 1). If m &gt; 1, EAR is always larger.`,
  ex:`With m = 1 there is no compounding within the year, so EAR = nominal. With more compounding, interest earns interest inside the year, so EAR is always larger.`,hw:[]},
 {n:24,t:`FV of a 3-year $100 annuity at 10% compounded semiannually`,k:`Payments are annual but compounding is semiannual, so the normal annuity technique can't be used directly.`,
  ex:`The mismatch is the trap: payments come once a year but the interest rate is 5% per <i>half-year</i>. If you enter N = 3 and I = 5 you will get the wrong answer. The next two slides give two correct methods.`,
  how:`ST-3f is the matching case: payments every 6 months with semiannual compounding, so the periods line up and you can use I = 4% and N = 6. No assigned problem has the mismatch, so know both methods for the exam.`,
  hw:[`st3|ST-3 f (contrast)|f`]},
 {n:25,t:`Method 1: compound each cash flow`,k:`100(1.05)⁴ + 100(1.05)² + 100 = <b>$331.80</b>.`,
  ex:`Compound each payment to Year 3 using the semiannual rate: the first payment sits for 4 half-years, the second for 2, the last for none. 121.55 + 110.25 + 100 = $331.80.`,hw:[]},
 {n:26,t:`Method 2: find the EAR and treat as an annuity`,k:`EAR = (1 + 0.10/2)² − 1 = 10.25%, then use it as an annual annuity.`,
  ex:`Convert 10% semiannual to its EAR (10.25%) and run a normal annual annuity: N=3, I/YR=10.25, PMT=−100, CPT FV = $331.80, the same answer as Method 1.`,hw:[]},
 {n:27,t:`Loan amortization: $1,000, 10%, 3 payments`,k:`Payment = <b>$402.11</b> (N=3, I/YR=10, PV=1,000, FV=0, CPT PMT).`,
  ex:`An <b>amortized loan</b> is repaid with equal payments that each cover interest and some principal. Step 1 is finding the payment: the loan amount is PV, and FV = 0 because the loan is fully paid off. For monthly or semiannual loans, use N = years × m and I/YR = nominal ÷ m.`,
  how:`Problems 5-8 (monthly) and 5-22a (semiannual) find the payment exactly this way.`,
  hw:[`p58|Problem 5-8 a|a`,`p522|Problem 5-22 a|a`,`st1|ST-1 j|j`]},
 {n:28,t:`Interest and principal in year 1`,k:`<b>INT = beginning balance × i</b> = $100. <b>PRIN = PMT − INT</b> = $302.11.`,
  ex:`Each period, interest is charged on the balance you still owe: 1,000 × 10% = $100. The rest of the payment, $402.11 − $100 = $302.11, reduces the loan.`,
  hw:[`p522|Problem 5-22 b, c|b,c`]},
 {n:29,t:`Ending balance and the amortization table`,k:`<b>End balance = beginning balance − PRIN</b> = $697.89. Interest falls each payment as the balance declines.`,
  ex:`New balance = 1,000 − 302.11 = $697.89. Repeat the steps for each period: next interest is 697.89 × 10% = $69.79, so more of the payment goes to principal. Interest falls and principal rises. The slide asks about tax implications: for a borrower with deductible interest (like a mortgage), the deduction shrinks over time.`,
  hw:[`q522d|Question 5-22d`]},
 {n:30,t:`Mortgage: $300,000, 30 years, 6% compounded monthly`,k:`Monthly payment <b>$1,799</b>; first month's interest $1,500.`,
  ex:`Monthly rate = 6% ÷ 12 = 0.5%; N = 360. Payment ≈ $1,799. First month's interest = 300,000 × 0.005 = $1,500, so only about $299 reduces the loan. That's why early mortgage payments barely lower the balance.`,
  how:`Problem 5-8 (60 monthly payments) is a smaller version of the same idea.`,hw:[]},
 {n:31,t:`Learning objectives`,k:`Know the applications in the notes; numeric problems will be similar. Know how PV changes as time extends and the rate rises. <b>Not</b> annuity due. Learn the financial calculator. Recommended: ST-1 to ST-4, 5-1 to 5-19, 5-22 to 5-24.`,
  ex:`Key concept to be able to explain: as the time to receipt is extended, or the interest rate rises, the present value of a future amount <b>falls</b>. Use the Homework tab for every assigned problem.`,
  hw:[`q510e|Question 5-10 e`]}
];


/* ============================================================
   NOTEBOOK STRUCTURE: textbook sections in order, each with notes to write and the homework to apply right after
   hw entries: "id|label|parts"
   ============================================================ */
CHAPTERS.find(c=>c.id==='ch3').notebook=[
 {num:`3.1a`,title:`The annual report and the four statements`,
  notes:[`The <b>annual report</b> is the key document a public company sends its stockholders: a verbal section plus four financial statements.`,
   `<b>Balance sheet</b>: a snapshot of assets, liabilities, and equity at ONE date.`,
   `<b>Income statement</b>: revenues, expenses, and profit over a PERIOD.`,
   `<b>Statement of cash flows</b>: how operating, investing, and financing activities changed cash. (Not on your exam.)`,
   `<b>Statement of stockholders' equity</b>: how and why equity (retained earnings) changed during the year.`,
   `Statements follow GAAP and are audited, but managers have discretion and fraud happens (WorldCom, Enron). Sarbanes-Oxley (2002): the CEO and CFO must certify the statements.`],
  tip:`Only the balance sheet is a snapshot; the other statements cover a period of time.`,
  hw:[`st1|ST-1 a|a`,`q35|Question 3-5 (GAAP)`]},
 {num:`3.1b`,title:`The balance sheet`,
  notes:[`<b>Assets = Liabilities + Equity</b> (always balances).`,
   `Assets: cash, receivables, inventories (= <b>current assets</b>, turn to cash within a year) + net plant and equipment (cost minus accumulated depreciation).`,
   `Liabilities: accounts payable, accruals, notes payable (= <b>current liabilities</b>, due within a year) + long-term debt.`,
   `<b>Equity</b> = paid-in capital + retained earnings. Retained earnings is a claim on assets, NOT cash.`,
   `Book value (historical cost) is not market value.`,
   `<b>Puzzle steps:</b> current assets = total assets − net fixed assets; total liabilities = total assets − equity; current liabilities = total liabilities − long-term debt.`],
  formulas:[`Total assets = Total liabilities + Equity`,`Equity = Paid-in capital + Retained earnings = Total assets − Total liabilities`,`Total debt = Notes payable + Long-term debt`,`Total liabilities = Total debt + Accounts payable + Accruals`],
  hw:[`p31|Problem 3-1 a–e|a,b,c,d,e`]},
 {num:`3.1c`,title:`Working capital: NWC and NOWC`,
  notes:[`<b>Working capital</b> = current assets. <b>Net working capital (NWC)</b> = current assets − current liabilities.`,
   `<b>Net operating working capital (NOWC)</b> = money tied up in day-to-day operations. Operating current liabilities are only accounts payable and accruals, so notes payable (interest-bearing) is removed.`,
   `With no excess cash: <b>NOWC − NWC = notes payable</b>.`,
   `When NOWC grows, cash is tied up in inventory and receivables, which lowers free cash flow.`,
   `Allied 2021: NWC = 1,000 − 310 = $690M; NOWC = 1,000 − (310 − 110) = $800M.`],
  formulas:[`NWC = Current assets − Current liabilities`,`NOWC = (Current assets − Excess cash) − (Current liabilities − Notes payable)`],
  tip:`Exam trap: NWC and NOWC are not the same. NOWC removes notes payable and excess cash.`,
  hw:[`p31|Problem 3-1 f, g, h|f,g,h`,`st2|ST-2 b, c|b,c`,`st1|ST-1 b|b`]},
 {num:`3.1d`,title:`The income statement`,
  notes:[`Sales − operating costs = <b>EBIT</b> (operating income). <b>EBITDA</b> = EBIT + depreciation + amortization.`,
   `EBIT − interest = <b>EBT</b>. EBT × (1 − T) = <b>net income</b>.`,
   `Depreciation (tangible) and amortization (intangibles) are <b>non-cash</b> charges.`,
   `EPS = net income ÷ shares. DPS = dividends ÷ shares.`,
   `Rising EBIT does not guarantee rising net income (Allied: interest jumped).`,
   `<b>Working backward:</b> EBT = NI ÷ (1 − T); interest = EBIT − EBT; D&amp;A = EBITDA − EBIT.`],
  formulas:[`EBT = EBIT − Interest &nbsp;|&nbsp; NI = EBT(1 − T)`,`EBITDA = EBIT + D&amp;A`,`EPS = NI ÷ Shares &nbsp;|&nbsp; DPS = Dividends ÷ Shares`],
  hw:[`p32|Problem 3-2`,`p33|Problem 3-3`,`st2|ST-2 a|a`,`st1|ST-1 c|c`]},
 {num:`3.1e`,title:`The statement of stockholders' equity`,
  notes:[`Shows how much of earnings was <b>retained</b> vs. paid out as dividends.`,
   `It links the income statement to the balance sheet through retained earnings.`,
   `Allied: 750 + 146.3 − 86.3 = $810M ending retained earnings.`],
  formulas:[`Addition to RE = Net income − Dividends`,`Ending RE = Beginning RE + Net income − Dividends`],
  hw:[`p34|Problem 3-4`]},
 {num:`3.2a`,title:`NOPAT and free cash flow`,
  notes:[`<b>NOPAT</b> = EBIT(1 − T): profit if the firm had no debt; used to judge operations only.`,
   `<b>FCF</b> = cash left after paying for the investment needed to run and grow the business. Left bracket = cash from operations; right bracket = reinvestment.`,
   `<b>CapEx</b> = Δ net plant and equipment + depreciation. <b>ΔNOWC</b> = NOWC this year − last year.`,
   `Negative FCF is not always bad: growth firms invest more than they generate (Allied 2021: −$71.5M; D'Leon: −$744,201).`],
  formulas:[`NOPAT = EBIT(1 − T)`,`FCF = [EBIT(1 − T) + D&amp;A] − [CapEx + ΔNOWC]`,`CapEx = (Ending net PPE − Beginning net PPE) + Depreciation`],
  hw:[`st2|ST-2 d|d`,`st1|ST-1 d|d`]},
 {num:`3.2b`,title:`MVA and EVA`,
  notes:[`Accounting statements use book values; they don't show how investors value the firm.`,
   `<b>MVA</b> = market value of equity − book value of equity. Positive MVA = management added wealth. Allied: 23.06 × 75 − 940 = $789.5M. D'Leon: +$186,232 (2020), −$267,592 (2021).`,
   `<b>EVA</b> = NOPAT − dollar cost of all capital. It is the year's economic profit and can be measured for a division.`,
   `Management actions: profitable investments, strong FCF, cost control, and lower capital raise EVA and the stock price (MVA).`],
  formulas:[`MVA = (Price × Shares) − Book value of equity`,`EVA = NOPAT − (Invested capital × After-tax cost of capital)`],
  hw:[`p35|Problem 3-5`,`q39|Question 3-9`,`st1|ST-1 e|e`]},
 {num:`3.3`,title:`Taxes`,
  notes:[`<b>Progressive</b> tax: higher income, higher rate. <b>Marginal rate</b> = rate on the next dollar. <b>Average rate</b> = total taxes ÷ taxable income (lower than marginal).`,
   `Corporate taxes in your problems: flat 25%.`,
   `<b>Interest paid</b> is deductible; <b>dividends paid</b> are not (after-tax income). $1 of dividends needs 1 ÷ (1 − T) = $1.33 of pretax income at 25%.`,
   `<b>Double taxation</b>: corporate income taxed, then dividends taxed to individuals. A corporation excludes 50% of dividends it receives (avoids triple taxation).`,
   `Loss carryforward (capped at 80% of taxable income); capital gains (≤ 1 year: ordinary; &gt; 1 year: 0/15/20%); AMT; traditional vs. Roth IRA; S corporation (≤ 100 shareholders, taxed like a partnership).`],
  formulas:[`Average tax rate = Total taxes ÷ Taxable income`,`Pretax income needed for $1 of dividends = 1 ÷ (1 − T)`],
  hw:[`q310|Question 3-10`,`st1|ST-1 f–j|f,g,h,i,j`]}
];

CHAPTERS.find(c=>c.id==='ch4').notebook=[
 {num:`4.1`,title:`Ratio analysis and the five categories`,
  notes:[`Ratios standardize numbers so firms of different sizes can be compared.`,
   `Compare through time (<b>trend analysis</b>) and with competitors or the industry (<b>benchmarking</b>). Never judge from one ratio.`,
   `<b>Five categories:</b> liquidity (can we pay?), asset management (right amount of assets?), debt management (right mix; can we cover interest?), profitability (prices vs. costs), market value (do investors like it?).`],
  terms:[[`Ratio analysis`,`Using relationships between financial statement numbers to judge a firm's condition and performance.`]],
  hw:[]},
 {num:`4.2`,title:`Liquidity ratios`,
  notes:[`Liquidity ratios show whether the firm can pay what is due within a year.`,
   `<b>Quick ratio</b> removes inventory, the least liquid current asset.`,
   `A falling current ratio is a warning sign; a very high one is not automatically good (idle cash, old inventory).`,
   `Allied: current 3.2× (industry 4.2×); quick 1.2× (industry 2.2×).`],
  formulas:[`Current ratio = Current assets ÷ Current liabilities`,`Quick ratio = (Current assets − Inventories) ÷ Current liabilities`],
  hw:[`p419|Problem 4-19`,`pbarry|Barry: current, quick|Current ratio,Quick ratio`]},
 {num:`4.3`,title:`Asset management ratios`,
  notes:[`Do we have too much or too little of each asset for our sales level?`,
   `<b>Inventory turnover</b>: low means too much or obsolete inventory. Textbook uses COGS (slides use sales; ask your professor).`,
   `<b>DSO</b>: average days to collect after a sale. Compare to credit terms. Allied 45.6 days vs. industry 36.`,
   `<b>FA turnover</b> and <b>TA turnover</b>: sales per dollar of assets. If FA is fine but TA is low, the excess is in current assets.`,
   `To work backward: receivables = DSO × (Sales ÷ 365); sales = turnover × assets.`],
  formulas:[`Inventory turnover = COGS ÷ Inventories`,`DSO = Receivables ÷ (Annual sales ÷ 365)`,`Fixed assets turnover = Sales ÷ Net fixed assets`,`Total assets turnover = Sales ÷ Total assets`],
  hw:[`p41|Problem 4-1`,`p420|Problem 4-20`,`p422|Problem 4-22`,`pbarry|Barry: asset management|Inventory turnover,Days sales outstanding,Total assets turnover`]},
 {num:`4.4`,title:`Debt management and financial leverage`,
  notes:[`<b>Financial leverage</b> = using debt. It magnifies returns in good years and losses in bad years (Firm L ROE: 60% / 15% / −10% vs. Firm U 33.75% / 11.25% / 0%).`,
   `<b>Total debt</b> = notes payable + long-term debt only (not accounts payable or accruals).`,
   `<b>TIE</b> uses EBIT because interest is paid before taxes.`,
   `Creditors want low debt ratios; stockholders may want leverage. Allied: debt ratio 47.8% (industry 36.4%); TIE 3.3× (6.0×).`],
  formulas:[`Total debt to total capital = Total debt ÷ (Total debt + Total equity)`,`TIE = EBIT ÷ Interest charges`],
  hw:[`p42|Problem 4-2`,`pbarry|Barry: TIE, debt to capital|Times interest earned,Debt to total capital`,`qslide16|Slide 16 exam question`]},
 {num:`4.5`,title:`Profitability ratios`,
  notes:[`<b>Operating margin</b> and <b>profit margin</b>: how much of each sales dollar becomes profit.`,
   `<b>BEP</b> ignores taxes and debt, so it compares firms fairly. BEP is NOT affected by tax rates, the interest rate, or the debt ratio.`,
   `<b>ROA</b> = return on all assets. <b>ROE</b> = return on stockholders' money. <b>ROIC</b> = NOPAT over debt + equity.`,
   `More debt, assets constant: equity ↓, interest ↑, NI ↓, ROA ↓, ROE may go up or down. If BEP &gt; the interest rate, debt raises ROE.`],
  formulas:[`Operating margin = EBIT ÷ Sales &nbsp;|&nbsp; Profit margin = NI ÷ Sales`,`BEP = EBIT ÷ Total assets`,`ROA = NI ÷ Total assets &nbsp;|&nbsp; ROE = NI ÷ Common equity`,`ROIC = EBIT(1 − T) ÷ (Debt + Equity)`],
  hw:[`p414|Problem 4-14`,`p415|Problem 4-15`,`p416|Problem 4-16`,`q417|Question 4-17`,`pbarry|Barry: profitability|Profit margin,ROA,ROE,ROIC`]},
 {num:`4.6`,title:`Market value ratios`,
  notes:[`<b>P/E</b>: dollars investors pay for $1 of earnings. <b>M/B</b>: market price vs. book value per share.`,
   `High P/E and M/B suggest strong growth and low risk. M/B is usually above 1.0 because book values are historical cost.`,
   `<b>EV</b> subtracts cash so a cash-rich, inefficient firm doesn't look better. Use debt at book (par) value unless told otherwise.`,
   `To find P/E from M/B: price = M/B × BVPS, then price ÷ EPS.`],
  formulas:[`P/E = Price ÷ EPS`,`BVPS = Common equity ÷ Shares &nbsp;|&nbsp; M/B = Price ÷ BVPS`,`EV = Market value of equity + Market value of debt − Cash`,`EV/EBITDA = EV ÷ EBITDA`],
  hw:[`p44|Problem 4-4`,`p45|Problem 4-5`,`p421|Problem 4-21`,`pbarry|Barry: market value|Market/book,P/E,EV/EBITDA`]},
 {num:`4.7`,title:`The DuPont equation and misuse of ROE`,
  notes:[`DuPont splits ROE into <b>expense control</b> (profit margin), <b>asset utilization</b> (total assets turnover), and <b>debt utilization</b> (equity multiplier).`,
   `ROA = PM × TATO. ROE = ROA × EM. EM = 1 + Debt/Equity. Liabilities ÷ assets = 1 − 1/EM.`,
   `<b>Three problems with ROE:</b> it ignores risk; it ignores the amount of capital invested; it can lead managers to reject profitable projects. EVA fixes this.`,
   `Working backward: TATO = ROA ÷ PM; EM = ROE ÷ ROA.`],
  formulas:[`ROE = (NI ÷ Sales) × (Sales ÷ TA) × (TA ÷ Equity)`,`Equity multiplier = TA ÷ Equity = 1 + Debt/Equity`],
  hw:[`p43|Problem 4-3`,`qslide29|Slide 29 exam question`,`qslide30|Slide 30 exam question`]},
 {num:`4.8`,title:`Benchmarking, trend analysis, and limitations`,
  notes:[`<b>Benchmarking</b>: compare to a chosen set of close competitors, not only an industry average. <b>Trend analysis</b>: plot a ratio over several years.`,
   `<b>Limitations:</b> conglomerates are hard to compare; "average" isn't necessarily good; seasonality; window dressing; inflation distorts book values; different accounting practices; hard to call a ratio good or bad.`],
  terms:[[`Window dressing`,`Techniques that make the statements and ratios look better than reality.`]],
  hw:[`qbarry|Barry comments`]}
];

CHAPTERS.find(c=>c.id==='ch5').notebook=[
 {num:`5.1`,title:`Time lines`,
  notes:[`A <b>time line</b> shows WHEN cash flows occur. Time 0 = today. Each tick is the end of one period and the start of the next.`,
   `Write the interest rate above the line and cash flows below, with ? for the unknown.`,
   `Jan 1, 2021 to Jan 1, 2024 is N = 3. A payment on Jan 1, 2022 sits at Time 1.`],
  hw:[`p510|Problem 5-10 e|e`,`st1|ST-1 a|a`]},
 {num:`5.2`,title:`Future value of a lump sum`,
  notes:[`<b>Compounding</b>: going from PV to FV. <b>Compound interest</b> = interest on interest; <b>simple interest</b> = interest on principal only.`,
   `$100 at 10% for 3 years = $133.10. Larger rate or longer time means a larger FV.`,
   `<b>Calculator:</b> clear TVM, 1 payment per year, END mode. N=3, I/YR=10, PV=−100, PMT=0, CPT FV = 133.10. (PV negative = money out.)`],
  terms:[[`FV, PV, I, INT, N, PMT`,`Future value, present value, interest rate per period, dollars of interest, number of periods, payment.`],[`Simple vs. compound interest`,`Simple: no interest on interest. Compound: interest on interest.`]],
  formulas:[`FV<sub>N</sub> = PV × (1 + I)<sup>N</sup>`,`Simple interest: FV = PV + PV(I)(N)`],
  hw:[`st2|ST-2 a|a`,`p51|Problem 5-1`,`p59|Problem 5-9 a, b|a,b`,`p510|Problem 5-10 a, b|a,b`,`st1|ST-1 b, c, d|b,c,d`]},
 {num:`5.3`,title:`Present value of a lump sum`,
  notes:[`<b>Discounting</b>: going from FV to PV. The rate is your <b>opportunity cost</b> (what you could earn on an alternative of similar risk).`,
   `$100 due in 3 years at 10% = $75.13 today.`,
   `<b>As time is extended, PV falls. As the rate rises, PV falls.</b> ($1 million due in 100 years: $7,604 at 5%, about $0.01 at 20%.)`,
   `To compare offers, value them at the same date.`],
  formulas:[`PV = FV<sub>N</sub> ÷ (1 + I)<sup>N</sup>`],
  hw:[`p52|Problem 5-2`,`p59|Problem 5-9 c, d|c,d`,`p510|Problem 5-10 c, d|c,d`,`q510e|Question 5-10 e (PV and interest rates)`,`st3|ST-3 a, c|a,c`,`st1|ST-1 e|e`]},
 {num:`5.4`,title:`Finding the interest rate`,
  notes:[`Know PV, FV, and N: solve for I. Calculator: N, PV (negative), FV, PMT=0, CPT I/YR.`,
   `A <b>growth rate</b> (sales, EPS) is the same math.`,
   `Don't divide total growth by years: sales that double in 5 years grew 14.87% a year, not 20%.`],
  formulas:[`I = (FV ÷ PV)<sup>1/N</sup> − 1`],
  hw:[`p53|Problem 5-3`,`p511|Problem 5-11`,`p512|Problem 5-12 a–c|a,b,c`,`st3|ST-3 d|d`]},
 {num:`5.5`,title:`Finding the number of periods`,
  notes:[`Know PV, FV, and I: solve for N with the calculator (CPT N).`,
   `<b>Doubling</b>: use PV = −1 and FV = 2. The answer doesn't depend on the amount. Higher rate means shorter time.`,
   `If there are regular payments, enter them as PMT (Problem 5-5).`],
  hw:[`p54|Problem 5-4`,`p513|Problem 5-13`,`p55|Problem 5-5`]},
 {num:`5.6`,title:`Annuities: ordinary vs. annuity due`,
  notes:[`An <b>annuity</b> = equal payments at evenly spaced intervals for a set number of periods.`,
   `<b>Ordinary (deferred) annuity</b>: payments at the END of each period (default). <b>Annuity due</b>: payments at the BEGINNING, so each earns one more period. (Annuity due is not on your exam.)`,
   `A <b>perpetuity</b> is an annuity that never ends. <b>Uneven cash flows</b> are not equal, so the shortcuts don't apply.`],
  hw:[`st1|ST-1 f|f`]},
 {num:`5.7`,title:`Future value of an annuity`,
  notes:[`FVA = value at the end of the last payment. $100 for 3 years at 10% = $331.00 (121 + 110 + 100).`,
   `<b>Calculator:</b> N, I/YR, PV=0, PMT (negative), CPT FV. To find the payment for a goal: enter FV, CPT PMT.`,
   `<b>Annuity due</b> = ordinary × (1 + I) (or BGN mode, then switch back to END).`,
   `Power of compounding: $1,095/yr at 12% from age 20 to 65 = $1,487,262; starting at 40 = $146,001.`],
  formulas:[`FVA<sub>N</sub> = PMT × [(1 + I)<sup>N</sup> − 1] ÷ I`,`PMT = FV × I ÷ [(1 + I)<sup>N</sup> − 1]`,`FVA (due) = FVA (ordinary) × (1 + I)`],
  hw:[`p56|Problem 5-6`,`st2|ST-2 c, d, e|c,d,e`,`p514|Problem 5-14`,`p519|Problem 5-19 a, b|a,b`,`st3|ST-3 b, e|b,e`]},
 {num:`5.8`,title:`Present value of an annuity (from your slides)`,
  notes:[`PVA = today's value of the whole payment stream. $100 for 3 years at 10% = $248.69.`,
   `<b>Calculator:</b> N, I/YR, PMT, FV=0, CPT PV. The same keys give the loan amount, the rate (CPT I/YR), or the payment (CPT PMT).`,
   `Retirement: the nest egg is a PV; solve for the withdrawal PMT.`],
  formulas:[`PVA<sub>N</sub> = PMT × [1 − 1 ÷ (1 + I)<sup>N</sup>] ÷ I`,`Loan payment: PMT = PV × I ÷ [1 − (1 + I)<sup>−N</sup>]`,`PVA (due) = PVA (ordinary) × (1 + I)`],
  hw:[`p515|Problem 5-15`,`p512|Problem 5-12 d|d`,`p517|Problem 5-17`,`p519|Problem 5-19 c|c`]},
 {num:`5.9`,title:`Perpetuities (not on your slides)`,
  notes:[`A perpetuity pays the same amount forever. PV = PMT ÷ I.`,`$600 forever at 5% = $12,000; at 10% = $6,000. Double the rate, half the value.`,`No TVM keys needed. This topic is not on your slides, so ask your professor whether it will be tested.`],
  formulas:[`PV of a perpetuity = PMT ÷ I`],
  hw:[`p516|Problem 5-16`]},
 {num:`5.10`,title:`Uneven cash flows`,
  notes:[`Discount each cash flow back to Time 0 separately and add. Slide: 100, 300, 300, −50 at 10% = $530.08.`,
   `FV of the stream = PV × (1 + I)<sup>N</sup> at the last date.`,
   `<b>Calculator:</b> CF worksheet: CF0, then each CF and its frequency, then NPV and the rate.`,
   `Streams that pay more earlier are worth more.`],
  formulas:[`PV = Σ CF<sub>t</sub> ÷ (1 + I)<sup>t</sup>`],
  hw:[`p57|Problem 5-7`,`p518|Problem 5-18`,`st1|ST-1 g|g`]},
 {num:`5.11`,title:`Compounding more than once a year; EAR`,
  notes:[`<b>Nominal (quoted, APR)</b> rate ignores compounding; never use it directly in calculations. <b>Periodic rate</b> = nominal ÷ m; <b>N</b> = years × m.`,
   `<b>EAR</b> (EFF%) = the rate actually earned. 10% semiannual = 10.25%. EAR = nominal only when m = 1.`,
   `More frequent compounding means a larger FV (by smaller and smaller amounts) and a smaller PV.`,
   `Same-EAR problems: find Bank A's EAR, then solve for Bank B's nominal rate.`,
   `<b>Calculator:</b> 2nd ICONV: NOM, C/Y, CPT EFF (or enter EFF and CPT NOM).`],
  terms:[[`Annual vs. semiannual compounding`,`Interest added once vs. twice a year.`]],
  formulas:[`I<sub>PER</sub> = I<sub>NOM</sub> ÷ m &nbsp;|&nbsp; N = years × m`,`EAR = (1 + I<sub>NOM</sub> ÷ m)<sup>m</sup> − 1`],
  hw:[`st2|ST-2 b|b`,`p523|Problem 5-23`,`q523f|Question 5-23f and 5-24d`,`p524|Problem 5-24`,`st3|ST-3 f, g|f,g`,`st4|ST-4`,`p58|Problem 5-8 b|b`,`st1|ST-1 h, i|h,i`]},
 {num:`5.12`,title:`Loan amortization`,
  notes:[`An <b>amortized loan</b> is repaid with equal payments covering interest and principal. FV = 0 when you find the payment.`,
   `Each period: INT = beginning balance × I; PRIN = PMT − INT; new balance = old − PRIN.`,
   `Interest falls and principal rises each payment (interest is charged on a shrinking balance).`,
   `<b>Calculator:</b> after CPT PMT, 2nd AMORT, P1, P2, then ↓ for BAL, PRN, INT.`,
   `Mortgage ($300,000, 30 yr, 6%): N=360, I/YR=0.5, PMT ≈ $1,799; first-month interest $1,500.`],
  terms:[[`Amortization schedule`,`A table splitting each payment into interest and principal, with the remaining balance.`]],
  formulas:[`INT = Beginning balance × I &nbsp;|&nbsp; PRIN = PMT − INT`],
  hw:[`p58|Problem 5-8 a|a`,`p522|Problem 5-22`,`q522d|Question 5-22d`,`st1|ST-1 j|j`]}
];

CHAPTERS.find(c=>c.id==='ch6').notebook=[
 {num:`6.1`,title:`The cost of money`,
  notes:[`The price of <b>debt capital</b> is the <b>interest rate</b>. The price of <b>equity capital</b> is the <b>required return</b> (dividends plus capital gains).`,
   `<b>4 factors that affect the cost of money:</b>`,
   `★ <b>Production opportunities</b>: returns firms can earn by investing in productive assets. More opportunities mean more demand for funds, so rates rise.`,
   `★ <b>Time preferences for consumption</b>: people prefer to consume now; the more impatient savers are, the higher the rate needed to persuade them to save.`,
   `★ <b>Risk</b>: the chance an investment returns less than expected. More risk means a higher required return.`,
   `★ <b>Expected inflation</b>: lenders want compensation for lost purchasing power, so higher expected inflation means higher rates.`],
  hw:[`q64|Question 6-4`,`q65|Question 6-5`,`st1|ST-1 a|a`]},
 {num:`6.2`,title:`Interest rate levels: nominal vs. real`,
  notes:[`★ <b>k (or r)</b> = any nominal rate. <b>r*</b> = real risk-free rate: the rate on a riskless security if there were no inflation (typically 1%–4%).`,
   `★ <b>r<sub>RF</sub></b> = nominal risk-free rate = the rate on Treasury securities = r* + IP.`,
   `When inflation is high, the real rate and inflation interact (the cross-product).`],
  formulas:[`(1 + r<sub>RF</sub>) = (1 + r*)(1 + IP) &nbsp;→&nbsp; r<sub>RF</sub> = r* + IP + (r* × IP)`],
  hw:[`p66|Problem 6-6`,`st1|ST-1 b|b`]},
 {num:`6.3`,title:`Determinants of market interest rates`,
  notes:[`<b>r = r* + IP + DRP + LP + MRP</b>`,
   `★ <b>IP</b> = inflation premium = the AVERAGE expected inflation over the security's life.`,
   `★ <b>DRP</b> = default risk premium (corporates only). ★ <b>LP</b> = liquidity premium (corporates; Treasuries are liquid). ★ <b>MRP</b> = maturity risk premium (long-term securities).`,
   `<b>Which premiums apply:</b> T-bill: r* + IP. Long-term Treasury: + MRP. Short-term corporate: + DRP + LP. Long-term corporate: all four.`,
   `Interest rate risk: bond prices fall when rates rise (bigger for long-term). Reinvestment rate risk: cash flows reinvested at lower rates when rates fall (bigger for short-term).`,
   `Corporate yield = Treasury yield + DRP + LP, so DRP = corporate − Treasury − LP.`],
  formulas:[`r = r* + IP + DRP + LP + MRP`,`T-bill: r<sub>RF</sub> = r* + IP &nbsp;|&nbsp; T-bond: r = r* + IP + MRP`,`IP = (I<sub>1</sub> + I<sub>2</sub> + … + I<sub>n</sub>) ÷ n`],
  hw:[`p62|Problem 6-2`,`p63|Problem 6-3`,`p64|Problem 6-4`,`p65|Problem 6-5`,`st2|ST-2`,`qslide6|Slide 6 exam question`,`st1|ST-1 c, d, e, f|c,d,e,f`]},
 {num:`6.4`,title:`The term structure of interest rates`,
  notes:[`★ <b>Term structure</b>: the relationship between yields and maturities. ★ <b>Yield curve</b>: the graph of it.`,
   `<b>Shapes:</b> normal (upward sloping); inverted/abnormal (downward sloping); humped (middle highest); flat.`,
   `Corporate yield curves lie above Treasuries (not necessarily parallel). The spread (DRP + LP) widens as the bond rating falls.`],
  hw:[`st1|ST-1 g, h|g,h`]},
 {num:`6.5`,title:`What determines the shape of the yield curve (pure expectations)`,
  notes:[`★ <b>Pure expectations theory (PEH)</b>: the shape depends on expectations about future short-term rates. Rates expected to rise, so the curve slopes up; expected to fall, so it slopes down.`,
   `Assumes the <b>MRP on Treasuries is zero</b>. A long-term rate is an AVERAGE of the current and expected future short-term rates.`,
   `Because a long rate is an average, short-term rates fluctuate more than long-term rates.`,
   `Evidence: lenders prefer short-term securities, so the real MRP is positive (PEH is a simplification).`,
   `With r* = 3% and inflation 2% forever, no MRP: every Treasury yields 5% and the curve is flat.`],
  hw:[`q62|Question 6-2`,`qslide10|Slide 10 exam question`,`st1|ST-1 i|i`]},
 {num:`6.6`,title:`Using the yield curve to estimate future interest rates`,
  notes:[`If PEH holds, you can "back out" the market's expected future rates from today's yields.`,
   `<b>Geometric:</b> (1 + Y<sub>2</sub>)² = (1 + Y<sub>1</sub>)(1 + f). Slide: (1.062)² = (1.060)(1 + X), so X = 6.4004%.`,
   `<b>Arithmetic shortcut:</b> f = 2 × Y<sub>2</sub> − Y<sub>1</sub>. CD example: 2(2.8) − 2.4 = 3.2%.`,
   `For longer horizons, take the (n − m)-th root (square root, cube root).`],
  formulas:[`(1 + Y<sub>n</sub>)<sup>n</sup> = (1 + Y<sub>m</sub>)<sup>m</sup> × (1 + f)<sup>n − m</sup>`,`f ≈ 2 × Y<sub>2</sub> − Y<sub>1</sub> (arithmetic, one-year forward rate)`],
  hw:[`st3|ST-3`,`qslide15|Slide 15 exam question`]},
 {num:`6.7`,title:`Macroeconomic factors that influence interest rate levels`,
  notes:[`<b>Federal Reserve policy:</b> a larger money supply tends to lower short-term rates at first, but can raise expected inflation (higher rates later).`,
   `<b>Federal budget deficit:</b> more government borrowing, so higher rates.`,
   `<b>Level of business activity:</b> rates rise in expansions and fall in recessions.`,
   `<b>International factors:</b> a ★ <b>foreign trade deficit</b> (imports &gt; exports) is financed by foreign borrowing, adding to demand for funds and raising rates.`],
  hw:[`q66|Question 6-6`,`st1|ST-1 j|j`]},
 {num:`6.8`,title:`Interest rates and business decisions`,
  notes:[`Rate changes affect a firm's choice between short-term and long-term debt and its investment decisions.`,
   `Rates are cyclical: in a recession expect rates to fall, so borrow short-term and refinance later at lower rates (watch refinancing risk).`,
   `This section is not in the materials I have; use Question 6-3 below as your example.`],
  hw:[`q63|Question 6-3`]}
];


/* ============================================================
   VERBATIM QUESTION TEXT (from your textbook screenshots and slides)
   ============================================================ */
function Q(intro, parts){
  let h = intro || '';
  if(parts && parts.length){
    h += '<div class="qparts">' + parts.map((t,i)=>'<div><b>'+String.fromCharCode(97+i)+'.</b> '+t+'</div>').join('') + '</div>';
  }
  return h;
}
const QTEXT = {
ch3:{
 p31:Q(`<b>3-1 BALANCE SHEET</b> The assets of Dallas &amp; Associates consist entirely of current assets and net plant and equipment, and the firm has no excess cash. The firm has total assets of $2.5 million and net plant and equipment equals $2 million. It has notes payable of $150,000, long-term debt of $750,000, and total common equity of $1.5 million. The firm does have accounts payable and accruals on its balance sheet. The firm only finances with debt and common equity, so it has no preferred stock on its balance sheet.`,
  [`What is the company's total debt?`,`What is the amount of total liabilities and equity that appears on the firm's balance sheet?`,`What is the balance of current assets on the firm's balance sheet?`,`What is the balance of current liabilities on the firm's balance sheet?`,`What is the amount of accounts payable and accruals on its balance sheet? (<i>Hint:</i> Consider this as a single line item on the firm's balance sheet.)`,`What is the firm's net working capital?`,`What is the firm's net operating working capital?`,`What is the explanation for the difference in your answers to parts f and g?`]),
 p32:`<b>3-2 INCOME STATEMENT</b> Byron Books Inc. recently reported $15 million of net income. Its EBIT was $20.8 million, and its tax rate was 25%. What was its interest expense? (<i>Hint:</i> Write out the headings for an income statement, and fill in the known values. Then divide $15 million of net income by (1 − T) = 0.75 to find the pretax income. The difference between EBIT and taxable income must be interest expense. Use this same procedure to complete similar problems.)`,
 p33:`<b>3-3 INCOME STATEMENT</b> Patterson Brothers recently reported an EBITDA of $7.5 million and net income of $2.625 million. It had $1.5 million of interest expense, and its corporate tax rate was 25%. What was its charge for depreciation and amortization?`,
 p34:`<b>3-4 STATEMENT OF STOCKHOLDERS' EQUITY</b> In its most recent financial statements, Nessler Inc. reported $75 million of net income and $825 million of retained earnings. The previous retained earnings were $784 million. How much in dividends were paid to shareholders during the year? Assume that all dividends declared were actually paid.`,
 p35:`<b>3-5 MVA</b> Harper Industries has $900 million of common equity on its balance sheet, its stock price is $80 per share, and its market value added (MVA) is $50 million. How many common shares are currently outstanding?`,
 st2:Q(`<b>ST-2 NET INCOME AND CASH FLOW</b> Last year Rattner Robotics had $5 million in operating income (EBIT). Its depreciation expense was $1 million, its interest expense was $1 million, and its corporate tax rate was 25%. At year-end, it had $14 million in operating current assets, $3 million in accounts payable, $1 million in accruals, $2 million in notes payable, and $15 million in net plant and equipment. Assume Rattner has no excess cash. Rattner uses only debt and common equity to fund its operations. (In other words, Rattner has no preferred stock on its balance sheet.) Rattner had no other current liabilities. Assume that Rattner's only noncash item was depreciation.`,
  [`What was the company's net income?`,`What was its net operating working capital (NOWC)?`,`What was its net working capital (NWC)?`,`Rattner had $12 million in net plant and equipment the prior year. Its net operating working capital has remained constant over time. What is the company's free cash flow (FCF) for the year that just ended?`]),
 q35:`<b>Question 3-5</b> Financial statements are based on generally accepted accounting principles (GAAP) and are audited by CPA firms. Do investors need to worry about the validity of those statements? Explain your answer.`,
 q39:`<b>Question 3-9</b> How are management's actions incorporated in EVA and MVA? How are EVA and MVA interconnected?`,
 q310:`<b>Question 3-10</b> Explain the following statement: "Our tax rates are progressive".`
},
ch4:{
 p41:`<b>4-1 DAYS SALES OUTSTANDING</b> Baxley Brothers has a DSO of 23 days, and its annual sales are $3,650,000. What is its accounts receivable balance? Assume that it uses a 365-day year.`,
 p42:`<b>4-2 DEBT TO CAPITAL RATIO</b> Kaye's Kitchenware has a market/book ratio equal to 1. Its stock price is $12 per share and it has 4.8 million shares outstanding. The firm's total capital is $110 million and it finances with only debt and common equity. What is its debt-to-capital ratio?`,
 p43:`<b>4-3 DuPONT ANALYSIS</b> Henderson's Hardware has an ROA of 11%, a 6% profit margin, and an ROE of 23%. What is its total assets turnover? What is its equity multiplier?`,
 p44:`<b>4-4 MARKET/BOOK AND EV/EBITDA RATIOS</b> Edelman Engines has $17 billion in total assets—of which cash and equivalents total $100 million. Its balance sheet shows $1.7 billion in current liabilities—of which the notes payable balance totals $1 billion. The firm also has $10.2 billion in long-term debt and $5.1 billion in common equity. It has 300 million shares of common stock outstanding, and its stock price is $20 per share. The firm's EBITDA totals $1.368 billion. Assume the firm's debt is priced at par, so the market value of its debt equals its book value. What are Edelman's market/book and its EV/EBITDA ratios?`,
 p45:`<b>4-5 PRICE/EARNINGS RATIO</b> A company has an EPS of $2.40, a book value per share of $21.84, and a market/book ratio of 2.7×. What is its P/E ratio?`,
 p414:`<b>4-14 RETURN ON EQUITY</b> Pacific Packaging's ROE last year was only 5%, but its management has developed a new operating plan that calls for a debt-to-capital ratio of 40%, which will result in annual interest charges of $561,000. The firm has no plans to use preferred stock, and total assets equal total invested capital. Management projects an EBIT of $1,870,000 on sales of $17,000,000, and it expects to have a total assets turnover ratio of 2.1. Under these conditions, the tax rate will be 25%. If the changes are made, what will be the company's return on equity?`,
 p415:`<b>4-15 RETURN ON EQUITY AND QUICK RATIO</b> Lloyd Inc. has sales of $200,000, a net income of $15,000, and the following balance sheet:
  <div class="scroll"><table><tbody>
  <tr><td>Cash</td><td class="n">$10,000</td><td>Accounts payable</td><td class="n">$30,000</td></tr>
  <tr><td>Receivables</td><td class="n">50,000</td><td>Notes payable to bank</td><td class="n">20,000</td></tr>
  <tr><td>Inventories</td><td class="n">150,000</td><td>Total current liabilities</td><td class="n">$50,000</td></tr>
  <tr><td>Total current assets</td><td class="n">$210,000</td><td>Long-term debt</td><td class="n">50,000</td></tr>
  <tr><td>Net fixed assets</td><td class="n">90,000</td><td>Common equity</td><td class="n">200,000</td></tr>
  <tr><td>Total assets</td><td class="n">$300,000</td><td>Total liabilities and equity</td><td class="n">$300,000</td></tr>
  </tbody></table></div>
  The new owner thinks that inventories are excessive and can be lowered to the point where the current ratio is equal to the industry average, 2.5×, without affecting sales or net income. If inventories are sold and not replaced (thus reducing the current ratio to 2.5×), if the funds generated are used to reduce common equity (stock can be repurchased at book value), and if no other changes occur, by how much will the ROE change? What will be the firm's new quick ratio?`,
 p416:`<b>4-16 RETURN ON EQUITY</b> Commonwealth Construction (CC) needs $3 million of assets to get started, and it expects to have a basic earning power ratio of 35%. CC will own no securities, all of its income will be operating income. If it so chooses, CC can finance up to 30% of its assets with debt, which will have an 8% interest rate. If it chooses to use debt, the firm will finance using only debt and common equity, so no preferred stock will be used. Assuming a 25% tax rate on taxable income, what is the <i>difference</i> between CC's expected ROE if it finances these assets with 30% debt versus its expected ROE if it finances these assets entirely with common stock?`,
 q417:Q(`<b>4-17 CONCEPTUAL: RETURN ON EQUITY</b> Which of the following statements is most correct? (<i>Hint:</i> Work Problem 4-16 before answering 4-17, and consider the solution setup for 4-16 as you think about 4-17.)`,
  [`If a firm's expected basic earning power (BEP) is constant for all of its assets and exceeds the interest rate on its debt, adding assets and financing them with debt will raise the firm's expected return on common equity (ROE).`,`The higher a firm's tax rate, the lower its BEP ratio, other things held constant.`,`The higher the interest rate on a firm's debt, the lower its BEP ratio, other things held constant.`,`The higher a firm's debt ratio, the lower its BEP ratio, other things held constant.`,`Statement a is false, but statements b, c, and d are true.`]),
 p419:`<b>4-19 CURRENT RATIO</b> The Stewart Company has $2,392,500 in current assets and $1,076,625 in current liabilities. Its initial inventory level is $526,350, and it will raise funds as additional notes payable and use them to increase inventory. How much can its short-term debt (notes payable) increase without pushing its current ratio below 2.0?`,
 p420:`<b>4-20 DSO AND ACCOUNTS RECEIVABLE</b> Ingraham Inc. currently has $205,000 in accounts receivable, and its days sales outstanding (DSO) is 71 days. It wants to reduce its DSO to 20 days by pressuring more of its customers to pay their bills on time. If this policy is adopted, the company's average sales will fall by 15%. What will be the level of accounts receivable following the change? Assume a 365-day year.`,
 p421:`<b>4-21 P/E AND STOCK PRICE</b> Ferrell Inc. recently reported net income of $8 million. It has 540,000 shares of common stock, which currently trades at $21 a share. Ferrell continues to expand and anticipates that 1 year from now its net income will be $13.2 million. Over the next year, it also anticipates issuing an additional 81,000 shares of stock so that 1 year from now it will have 621,000 shares of common stock. Assuming Ferrell's price/earnings ratio remains at its current level, what will be its stock price 1 year from now?`,
 p422:`<b>4-22 BALANCE SHEET ANALYSIS</b> Complete the balance sheet and sales information using the following financial data:
  <div class="qparts"><div>Total assets turnover: 1.5×</div><div>Days sales outstanding: 36.5 days</div><div>Inventory turnover ratio: 3.75×</div><div>Fixed assets turnover: 3.0×</div><div>Current ratio: 2.0×</div><div>Gross profit margin on sales: (Sales − Cost of goods sold)/Sales = 25%</div></div>
  <div class="scroll"><table><thead><tr><th colspan="2">Balance Sheet</th><th colspan="2"></th></tr></thead><tbody>
  <tr><td>Cash</td><td class="n">?</td><td>Current liabilities</td><td class="n">?</td></tr>
  <tr><td>Accounts receivable</td><td class="n">?</td><td>Long-term debt</td><td class="n">60,000</td></tr>
  <tr><td>Inventories</td><td class="n">?</td><td>Common stock</td><td class="n">?</td></tr>
  <tr><td>Fixed assets</td><td class="n">?</td><td>Retained earnings</td><td class="n">97,500</td></tr>
  <tr><td>Total assets</td><td class="n">$300,000</td><td>Total liabilities and equity</td><td class="n">?</td></tr>
  <tr><td>Sales</td><td class="n">?</td><td>Cost of goods sold</td><td class="n">?</td></tr>
  </tbody></table></div>`,
 pbarry:`<b>Barry Computer Company ratio table</b> (from the Challenging Problems 20–24 exhibit). The exact wording of the problem was not visible in your screenshot; the task is to fill in every ratio in the table (Barry vs. the industry average) from the data below. Dollars in thousands. Current assets 655,000 (cash 77,500; receivables 336,000; inventories 241,500); net fixed assets 292,500; total assets 947,500. Accounts payable 129,000; other current liabilities 117,000; notes payable 84,000 (current liabilities 330,000); long-term debt 256,500; common equity 361,000 (36,100 shares). Sales 1,607,500; COGS 1,351,000; depreciation 41,500; EBIT 70,000; interest 21,000; EBT 49,000; taxes (25%) 12,250; net income 36,750; EPS $1.018; price per share $12.00. Industry averages: current 2.0×, quick 1.3×, DSO 35 days, inventory turnover 5.7×, total assets turnover 3.0×, profit margin 1.6%, ROA 4.8%, ROE 12.1%, ROIC 9.4%, TIE 3.5×, debt/total capital 47.0%, M/B 4.22×, P/E 13.27, EV/EBITDA 9.14.`,
 qslide16:Q(`<b>Slide 16 exam question</b> As a short-term creditor concerned with a company's ability to meet its financial obligation to you, which one of the following combinations of ratios would you most likely prefer?`,
  [`Current ratio 0.5, TIE 0.5, debt ratio 0.33`,`Current ratio 1.0, TIE 1.0, debt ratio 0.50`,`Current ratio 1.5, TIE 1.5, debt ratio 0.50`,`Current ratio 2.0, TIE 1.0, debt ratio 0.67`]),
 qslide29:Q(`<b>Slide 29 exam question</b> A firm that has an equity multiplier of 4.0 will have a total liabilities over assets ratio of`,[`4.00`,`3.00`,`1.00`,`0.75`]),
 qslide30:Q(`<b>Slide 30 exam question</b> The Merriam Company has determined that its return on equity is 15 percent. Management is interested in the various components that went into this calculation. You are given the following information: total liabilities/total assets = 0.35 and total assets turnover = 2.8. What is the profit margin?`,[`3.48%`,`5.42%`,`6.96%`,`2.45%`]),
 qbarry:`<b>Barry Computer: what do the ratios say?</b> Compare each of Barry's ratios with the industry average (the ratio table above) and comment on liquidity, asset management, debt, profitability, and market value.`
},
ch5:{
 st2:Q(`<b>ST-2 FUTURE VALUE</b> It is now January 1, 2021. Today you will deposit $1,000 into a savings account that pays 8%.`,
  [`If the bank compounds interest annually, how much will you have in your account on January 1, 2024?`,`What will your January 1, 2024, balance be if the bank uses quarterly compounding?`,`Suppose you deposit $1,000 in three payments of $333.333 each on January 1 of 2022, 2023, and 2024. How much will you have in your account on January 1, 2024, based on 8% annual compounding?`,`How much will be in your account if the three payments begin on January 1, 2021?`,`Suppose you deposit three equal payments into your account on January 1 of 2022, 2023, and 2024. Assuming an 8% interest rate, how large must your payments be to have the same ending balance as in part a?`]),
 st3:Q(`<b>ST-3 TIME VALUE OF MONEY</b> It is now January 1, 2021, and you will need $1,000 on January 1, 2025, in 4 years. Your bank compounds interest at an 8% annual rate.`,
  [`How much must you deposit today to have a balance of $1,000 on January 1, 2025?`,`If you want to make four equal payments on each January 1 from 2022 through 2025 to accumulate the $1,000, how large must each payment be? (Note that the payments begin a year from today.)`,`If your father offers to make the payments calculated in part b ($221.92) or to give you $750 on January 1, 2022 (a year from today), which would you choose? Explain.`,`If you have only $750 on January 1, 2022, what interest rate, compounded annually for 3 years, must you earn to have $1,000 on January 1, 2025?`,`Suppose you can deposit only $200 each January 1 from 2022 through 2025 (4 years). What interest rate, with annual compounding, must you earn to end up with $1,000 on January 1, 2025?`,`Your father offers to give you $400 on January 1, 2022. You will then make six additional equal payments each 6 months from July 2022 through January 2025. If your bank pays 8% compounded semiannually, how large must each payment be for you to end up with $1,000 on January 1, 2025?`,`What is the EAR, or EFF%, earned on the bank account in part f? What is the APR earned on the account?`]),
 st4:`<b>ST-4 EFFECTIVE ANNUAL RATES</b> Bank A offers loans at an 8% nominal rate (its APR) but requires that interest be paid quarterly; that is, it uses quarterly compounding. Bank B wants to charge the same effective rate on its loans, but it wants to collect interest on a monthly basis, that is, to use monthly compounding. What nominal rate must Bank B set?`,
 p51:`<b>5-1 FUTURE VALUE</b> If you deposit $2,000 in a bank account that pays 6% interest annually, how much will be in your account after 5 years?`,
 p52:`<b>5-2 PRESENT VALUE</b> What is the present value of a security that will pay $29,000 in 20 years if securities of equal risk pay 5% annually?`,
 p53:`<b>5-3 FINDING THE REQUIRED INTEREST RATE</b> Your parents will retire in 19 years. They currently have $350,000 saved, and they think they will need $800,000 at retirement. What annual interest rate must they earn to reach their goal, assuming they don't save any additional funds?`,
 p54:`<b>5-4 TIME FOR A LUMP SUM TO DOUBLE</b> If you deposit money today in an account that pays 4% annual interest, how long will it take to double your money?`,
 p55:`<b>5-5 TIME TO REACH A FINANCIAL GOAL</b> You have $33,556.25 in a brokerage account, and you plan to deposit an additional $5,000 at the end of every future year until your account totals $220,000. You expect to earn 12% annually on the account. How many years will it take to reach your goal?`,
 p56:`<b>5-6 FUTURE VALUE: ANNUITY VERSUS ANNUITY DUE</b> What's the future value of a 5%, 5-year ordinary annuity that pays $800 each year? If this was an annuity due, what would its future value be?`,
 p57:`<b>5-7 PRESENT AND FUTURE VALUES OF A CASH FLOW STREAM</b> An investment will pay $150 at the end of each of the next 3 years, $250 at the end of Year 4, $300 at the end of Year 5, and $500 at the end of Year 6. If other investments of equal risk earn 11% annually, what is its present value? Its future value?`,
 p58:`<b>5-8 LOAN AMORTIZATION AND EAR</b> You want to buy a car, and a local bank will lend you $40,000. The loan will be fully amortized over 5 years (60 months), and the nominal interest rate will be 8% with interest paid monthly. What will be the monthly loan payment? What will be the loan's EAR?`,
 p59:Q(`<b>5-9 PRESENT AND FUTURE VALUES FOR DIFFERENT PERIODS</b> Find the following values <i>using the equations</i> and then a financial calculator. Compounding/discounting occurs annually.`,
  [`An initial $600 compounded for 1 year at 6%`,`An initial $600 compounded for 2 years at 6%`,`The present value of $600 due in 1 year at a discount rate of 6%`,`The present value of $600 due in 2 years at a discount rate of 6%`]),
 p510:Q(`<b>5-10 PRESENT AND FUTURE VALUES FOR DIFFERENT INTEREST RATES</b> Find the following values. Compounding/discounting occurs annually.`,
  [`An initial $200 compounded for 10 years at 4%`,`An initial $200 compounded for 10 years at 8%`,`The present value of $200 due in 10 years at 4%`,`The present value of $1,870 due in 10 years at 8% and at 4%`,`Define <i>present value</i> and illustrate it using a time line with data from part d. How are present values affected by interest rates?`]),
 p511:Q(`<b>5-11 GROWTH RATES</b> Sawyer Corporation's 2020 sales were $5 million. Its 2015 sales were $2.5 million.`,
  [`At what rate have sales been growing?`,`Suppose someone made this statement: "Sales doubled in 5 years. This represents a growth of 100% in 5 years; so dividing 100% by 5, we find the growth rate to be 20% per year." Is the statement correct?`]),
 p512:Q(`<b>5-12 EFFECTIVE RATE OF INTEREST</b> Find the interest rates earned on each of the following:`,
  [`You <i>borrow</i> $720 and promise to pay back $792 at the end of 1 year.`,`You <i>lend</i> $720, and the borrower promises to pay you $792 at the end of 1 year.`,`You <i>borrow</i> $65,000 and promise to pay back $98,319 at the end of 14 years.`,`You <i>borrow</i> $15,000 and promise to make payments of $4,058.60 at the end of each year for 5 years.`]),
 p513:Q(`<b>5-13 TIME FOR A LUMP SUM TO DOUBLE</b> How long will it take $300 to double if it earns the following rates? Compounding occurs once a year.`,[`6%`,`13%`,`21%`,`100%`]),
 p514:Q(`<b>5-14 FUTURE VALUE OF AN ANNUITY</b> Find the <i>future values</i> of these <i>ordinary annuities</i>. Compounding occurs once a year.`,
  [`$500 per year for 8 years at 14%`,`$250 per year for 4 years at 7%`,`$700 per year for 4 years at 0%`,`Rework parts a, b, and c assuming they are <i>annuities due</i>.`]),
 p515:Q(`<b>5-15 PRESENT VALUE OF AN ANNUITY</b> Find the <i>present values</i> of these <i>ordinary annuities</i>. Discounting occurs once a year.`,
  [`$600 per year for 12 years at 8%`,`$300 per year for 6 years at 4%`,`$500 per year for 6 years at 0%`,`Rework parts a, b, and c assuming they are <i>annuities due</i>.`]),
 p516:`<b>5-16 PRESENT VALUE OF A PERPETUITY</b> What is the present value of a $600 perpetuity if the interest rate is 5%? If interest rates doubled to 10%, what would its present value be?`,
 p517:`<b>5-17 EFFECTIVE INTEREST RATE</b> You borrow $230,000; the annual loan payments are $20,430.31 for 30 years. What interest rate are you being charged?`,
 p518:`<b>5-18 UNEVEN CASH FLOW STREAM</b><div class="qparts"><div><b>a.</b> Find the present values of the following cash flow streams at a 5% discount rate.</div></div>
  <div class="scroll"><table><thead><tr><th></th><th class="n">0</th><th class="n">1</th><th class="n">2</th><th class="n">3</th><th class="n">4</th><th class="n">5</th></tr></thead><tbody>
  <tr><td>Stream A</td><td class="n">$0</td><td class="n">$150</td><td class="n">$450</td><td class="n">$450</td><td class="n">$450</td><td class="n">$250</td></tr>
  <tr><td>Stream B</td><td class="n">$0</td><td class="n">$250</td><td class="n">$450</td><td class="n">$450</td><td class="n">$450</td><td class="n">$150</td></tr></tbody></table></div>
  <div class="qparts"><div><b>b.</b> What are the PVs of the streams at a 0% discount rate?</div></div>`,
 p519:Q(`<b>5-19 FUTURE VALUE OF AN ANNUITY</b> Your client is 26 years old. She wants to begin saving for retirement, with the first payment to come one year from now. She can save $8,000 per year, and you advise her to invest it in the stock market, which you expect to provide an average return of 10% in the future.`,
  [`If she follows your advice, how much money will she have at 65?`,`How much will she have at 70?`,`She expects to live for 20 years if she retires at 65 and for 15 years if she retires at 70. If her investments continue to earn the same rate, how much will she be able to withdraw at the end of each year after retirement at each retirement age?`]),
 p522:Q(`<b>5-22 LOAN AMORTIZATION</b> Jan sold her house on December 31 and took a $10,000 mortgage as part of the payment. The 10-year mortgage has a 10% nominal interest rate, but it calls for semiannual payments beginning next June 30. Next year Jan must report on Schedule B of her IRS Form 1040 the amount of interest that was included in the two payments she received during the year.`,
  [`What is the dollar amount of each payment Jan receives?`,`How much interest was included in the first payment? How much repayment of principal was included? How do these values change for the second payment?`,`How much interest must Jan report on Schedule B for the first year? Will her interest income be the same next year?`,`If the payments are constant, why does the amount of interest income change over time?`]),
 p523:Q(`<b>5-23 FUTURE VALUE FOR VARIOUS COMPOUNDING PERIODS</b> Find the amount to which $500 will grow under each of these conditions:`,
  [`12% compounded annually for 5 years`,`12% compounded semiannually for 5 years`,`12% compounded quarterly for 5 years`,`12% compounded monthly for 5 years`,`12% compounded daily for 5 years`,`Why does the observed pattern of FVs occur?`]),
 p524:Q(`<b>5-24 PRESENT VALUE FOR VARIOUS DISCOUNTING PERIODS</b> Find the present value of $500 due in the future under each of these conditions:`,
  [`12% nominal rate, semiannual compounding, discounted back 5 years`,`12% nominal rate, quarterly compounding, discounted back 5 years`,`12% nominal rate, monthly compounding, discounted back 1 year`,`Why do the differences in the PVs occur?`]),
 q523f:`<b>5-23 f.</b> Why does the observed pattern of FVs occur? (The FVs of $500 at 12% for 5 years under annual, semiannual, quarterly, monthly, and daily compounding.)<br><b>5-24 d.</b> Why do the differences in the PVs occur? (The PVs of $500 under semiannual, quarterly, and monthly discounting.)`,
 q522d:`<b>5-22 d.</b> If the payments are constant, why does the amount of interest income change over time?`,
 q510e:`<b>5-10 e.</b> Define <i>present value</i> and illustrate it using a time line with data from part d ($1,870 due in 10 years at 8% and at 4%). How are present values affected by interest rates?`
},
ch6:{
 st2:Q(`<b>ST-2 INFLATION AND INTEREST RATES</b> The real risk-free rate of interest, r*, is 3%, and it is expected to remain constant over time. Inflation is expected to be 2% per year for the next 3 years and 4% per year for the next 5 years. The maturity risk premium is equal to 0.1 × (t − 1)%, where t = the bond's maturity. The default risk premium for a BBB-rated bond is 1.3%.`,
  [`What is the average expected inflation rate over the next 4 years?`,`What is the yield on a 4-year Treasury bond?`,`What is the yield on a 4-year BBB-rated corporate bond with a liquidity premium of 0.5%?`,`What is the yield on an 8-year Treasury bond?`,`What is the yield on an 8-year BBB-rated corporate bond with a liquidity premium of 0.5%?`,`If the yield on a 9-year Treasury bond is 7.3%, what does that imply about expected inflation in 9 years?`]),
 st3:Q(`<b>ST-3 PURE EXPECTATIONS THEORY</b> The yield on 1-year Treasury securities is 6%, 2-year securities yield 6.2%, 3-year securities yield 6.3%, and 4-year securities yield 6.5%. There is no maturity risk premium. Using expectations theory and geometric averages, forecast the yields on the following securities:`,
  [`A 1-year security, 1 year from now`,`A 1-year security, 2 years from now`,`A 2-year security, 1 year from now`,`A 3-year security, 1 year from now`]),
 p62:`<b>6-2 REAL RISK-FREE RATE</b> You read in <i>The Wall Street Journal</i> that 30-day T-bills are currently yielding 5.8%. Your brother-in-law, a broker at Safe and Sound Securities, has given you the following estimates of current interest rate premiums: Inflation premium = 3.25%; Liquidity premium = 0.6%; Maturity risk premium = 1.85%; Default risk premium = 2.15%. On the basis of these data, what is the real risk-free rate of return?`,
 p63:`<b>6-3 EXPECTED INTEREST RATE</b> The real risk-free rate is 2.25%. Inflation is expected to be 2.5% this year and 4.25% during the next 2 years. Assume that the maturity risk premium is zero. What is the yield on 2-year Treasury securities? What is the yield on 3-year Treasury securities?`,
 p64:`<b>6-4 DEFAULT RISK PREMIUM</b> A Treasury bond that matures in 10 years has a yield of 5.75%. A 10-year corporate bond has a yield of 8.75%. Assume that the liquidity premium on the corporate bond is 0.35%. What is the default risk premium on the corporate bond?`,
 p65:`<b>6-5 MATURITY RISK PREMIUM</b> The real risk-free rate is 2.5% and inflation is expected to be 2.75% for the next 2 years. A 2-year Treasury security yields 5.55%. What is the maturity risk premium for the 2-year security?`,
 p66:`<b>6-6 INFLATION CROSS-PRODUCT</b> An analyst is evaluating securities in a developing nation where the inflation rate is very high. As a result, the analyst has been warned not to ignore the cross-product between the real rate and inflation. If the real risk-free rate is 5% and inflation is expected to be 18% each of the next 4 years, what is the yield on a 4-year security with no maturity, default, or liquidity risk? (<i>Hint:</i> Refer to "The Links Between Expected Inflation and Interest Rates: A Closer Look" on page 213.)`,
 q62:`<b>Question 6-2</b> Which fluctuate more—long-term or short-term interest rates? Why?`,
 q63:`<b>Question 6-3</b> Suppose you believe that the economy is just entering a recession. Your firm must raise capital immediately, and debt will be used. Should you borrow on a long-term or a short-term basis? Why?`,
 q64:Q(`<b>Question 6-4</b> Suppose the population of Area Y is relatively young, and the population of Area O is relatively old, but everything else about the two areas is the same.`,
  [`Would interest rates likely be the same or different in the two areas? Explain.`,`Would a trend toward nationwide branching by banks and the development of nationwide diversified financial corporations affect your answer to part a? Explain.`]),
 q65:`<b>Question 6-5</b> Suppose a new process was developed that could be used to make oil out of seawater. The equipment required is quite expensive, but it would in time lead to low prices for gasoline, electricity, and other types of energy. What effect would this have on interest rates?`,
 q66:Q(`<b>Question 6-6</b> Suppose a new and more liberal Congress and administration are elected. Their first order of business is to take away the independence of the Federal Reserve System and to force the Fed to greatly expand the money supply. What effect will this have:`,
  [`On the level and slope of the yield curve immediately after the announcement?`,`On the level and slope of the yield curve that would exist 2 or 3 years in the future?`]),
 qslide6:Q(`<b>Slide 6 exam question</b> Given the following data, find the expected rate of inflation during the next year. r* = real risk-free rate = 3%. Maturity risk premium on a 1-year corporate bond = 0.5%. Default risk premium on a 1-year corporate bond = 1.5%. Liquidity premium on a 1-year corporate bond = 0.5%. Going interest rate on 1-year corporate bond = 7.5%.`,[`3.5%`,`4.5%`,`2.0%`,`5%`]),
 qslide10:Q(`<b>Slide 10 exam question</b> The real risk-free rate, k*, is expected to remain constant at 3 percent per year. Inflation is expected to be 2 percent per year forever. Assume that the expectations theory holds; that is, there is no maturity risk premium. Which of the following statements is most correct?`,
  [`The yield curve for corporate bonds must be flat, but corporate bonds will yield more than 5 percent.`,`The Treasury yield curve is upward sloping for the first 10 years, and then downward sloping.`,`The Treasury yield curve is flat and all Treasury securities yield 5 percent.`,`Statements a and c are correct.`]),
 qslide15:Q(`<b>Slide 15 exam question</b> One-year government bonds yield 4 percent and 2-year government bonds yield 4.5 percent. Assume that the expectations theory holds. What does the market believe the rate on 1-year government bonds will be one year from today?`,[`5.50%`,`5.0%`,`5.75%`,`5.25%`])
}
};
const ST1Q = {
 ch3:{a:`Annual report; balance sheet; income statement; statement of cash flows; statement of stockholders' equity`,b:`Stockholders' equity; retained earnings; working capital; net working capital; net operating working capital (NOWC); total debt`,c:`Depreciation; amortization; operating income; EBITDA; free cash flow (FCF)`,d:`Net operating profit after taxes (NOPAT)`,e:`Market value added (MVA); economic value added (EVA)`,f:`Progressive tax; marginal tax rate; average tax rate`,g:`Tax loss carryforward; alternative minimum tax (AMT)`,h:`Traditional IRAs; Roth IRAs`,i:`Capital gain (loss)`,j:`S corporation`},
 ch5:{a:`Time line`,b:`FV<sub>N</sub>; PV; I; INT; N; FVA<sub>N</sub>; PMT; PVA<sub>N</sub>`,c:`Compounding; discounting`,d:`Simple interest; compound interest`,e:`Opportunity cost`,f:`Annuity; ordinary (deferred) annuity; annuity due; perpetuity`,g:`Uneven (nonconstant) cash flow; payment (PMT); cash flow (CF<sub>t</sub>)`,h:`Annual compounding; semiannual compounding`,i:`Nominal (quoted) interest rate; annual percentage rate (APR); effective (equivalent) annual rate (EAR or EFF%)`,j:`Amortized loan; amortization schedule`},
 ch6:{a:`Production opportunities; time preferences for consumption; risk; inflation`,b:`Real risk-free rate of interest, r*; nominal (quoted) risk-free rate of interest, r<sub>RF</sub>`,c:`Inflation premium (IP)`,d:`Default risk premium (DRP)`,e:`Liquidity premium (LP); maturity risk premium (MRP)`,f:`Interest rate risk; reinvestment rate risk`,g:`Term structure of interest rates; yield curve`,h:`"Normal" yield curve; inverted ("abnormal") yield curve; humped yield curve`,i:`Pure expectations theory`,j:`Foreign trade deficit`}
};
Object.keys(QTEXT).forEach(cid=>{
  const c=CHAPTERS.find(x=>x.id===cid); if(!c) return;
  Object.keys(QTEXT[cid]).forEach(id=>{
    const it=c.homework.find(x=>x.id===id)||c.homeworkConcept.find(x=>x.id===id);
    if(it) it.q=QTEXT[cid][id];
  });
});
Object.keys(ST1Q).forEach(cid=>{ const c=CHAPTERS.find(x=>x.id===cid); if(c) c.st1q=ST1Q[cid]; });

function qBox(it){ return '<div class="qbox"><b>Question</b> '+(it.q||('<b>Given:</b> '+it.given))+'</div>'; }
function st1QBox(want, chapter){
  const q=chapter.st1q; if(!q) return '';
  const letters='abcdefghij'.split('').filter(l=>q[l] && (!want || want.indexOf(l)>=0));
  return '<div class="qbox"><b>ST-1 KEY TERMS</b> Define each of the following terms:<div class="qparts">'+letters.map(l=>'<div><b>'+l+'.</b> '+q[l]+'</div>').join('')+'</div></div>';
}


/* ============================================================
   NOTEBOOK v2: concise "Write this down" notes (3-5 per section), exam reminders, and optional "Explain it to me"
   ============================================================ */
const NBX = {
ch3:{
 '3.1a':{notes:[
   `The <b>annual report</b> is the main document a public company sends stockholders: a verbal section plus four financial statements.`,
   `<b>Balance sheet</b> = snapshot of assets, liabilities, and equity at ONE date. <b>Income statement</b> = revenues, expenses, and profit over a PERIOD.`,
   `<b>Statement of cash flows</b> = how operating, investing, and financing activities changed cash (not on your exam). <b>Statement of stockholders' equity</b> = how equity (retained earnings) changed.`,
   `Statements follow <b>GAAP</b> and are audited, but managers have discretion and fraud happens. <b>Sarbanes-Oxley (2002)</b>: CEO and CFO must certify the statements.`],
  tip:`Only the balance sheet is a snapshot. The other statements cover a period of time.`,
  explain:`<p>Each statement answers a different question: the balance sheet is a <i>photograph</i> of what the firm owns and owes on one day; the income statement is a <i>video</i> of profit over a period. The statement of stockholders' equity links them: net income flows into retained earnings.</p>
  <p><b>Can you trust the numbers?</b> (Question 3-5.) GAAP leaves managers discretion (inventory valuation, depreciation methods, timing of transactions), and bonuses tied to short-term earnings create an incentive to manage the numbers. In the worst cases it is fraud: WorldCom overstated assets by about $11 billion; Enron hid problems in subsidiaries; their auditor, Arthur Andersen, was put out of business. Sarbanes-Oxley requires CEO/CFO certification, but investors should still read statements critically, and book values are historical costs, not market values.</p>`},
 '3.1b':{notes:[
   `<b>Assets = Liabilities + Equity</b>; it always balances.`,
   `<b>Current assets</b> (cash, receivables, inventories) turn into cash within a year. <b>Net plant and equipment</b> = cost minus accumulated depreciation. <b>Current liabilities</b> (accounts payable, accruals, notes payable) are due within a year.`,
   `<b>Equity</b> = paid-in capital + retained earnings. Retained earnings is a claim on assets, NOT cash. Book value ≠ market value.`,
   `<b>Puzzle steps:</b> current assets = total assets − net fixed assets; total liabilities = total assets − equity; current liabilities = total liabilities − long-term debt.`],
  tip:`Total debt = notes payable + long-term debt only. Accounts payable and accruals are NOT debt.`,
  explain:`<p>Assets are listed from most liquid (cash) to least (fixed assets). Liabilities and equity show <i>who financed</i> the assets: creditors (liabilities) or stockholders (equity). Equity is a residual claim, so stockholders absorb gains and losses first, which is why stock is riskier than debt.</p>
  <p><b>Allied Food Products (millions, 2021):</b> total assets $2,000 = current liabilities $310 + long-term bonds $750 + common equity $940. Retained earnings is $810M but cash is only $10M, which shows it is a claim, not cash. Book value per share is $12.53 while the stock trades at $23.06.</p>`},
 '3.1c':{notes:[
   `<b>Working capital</b> = current assets. <b>NWC</b> = current assets − current liabilities.`,
   `<b>NOWC</b> = money tied up in operations. Operating current liabilities are only accounts payable and accruals, so <b>notes payable (interest-bearing) is removed</b>.`,
   `With no excess cash: <b>NOWC − NWC = notes payable</b>.`,
   `Growth in NOWC ties up cash in inventory and receivables, which lowers free cash flow.`],
  tip:`NWC and NOWC are not the same. NOWC removes notes payable (and excess cash).`,
  explain:`<p>NWC treats every current liability the same. NOWC asks a sharper question: how much capital does the <i>operating</i> side of the business need? Accounts payable and accruals are free financing from suppliers and employees; notes payable is a loan, so it belongs with financing, not operations.</p>
  <p><b>Allied 2021:</b> NWC = 1,000 − 310 = $690M. NOWC = 1,000 − (310 − 110) = $800M. The $110M gap is notes payable. A rising NOWC (Allied: 800 vs. 650 last year) is cash the firm had to invest, which reduces FCF.</p>`},
 '3.1d':{notes:[
   `Sales − operating costs = <b>EBIT</b> (operating income). <b>EBITDA</b> = EBIT + depreciation + amortization.`,
   `EBIT − interest = <b>EBT</b>. EBT × (1 − T) = <b>net income</b>. EPS = NI ÷ shares; DPS = dividends ÷ shares.`,
   `<b>Depreciation</b> (tangible) and <b>amortization</b> (intangibles) are non-cash charges.`,
   `<b>Working backward:</b> EBT = NI ÷ (1 − T); interest = EBIT − EBT; D&amp;A = EBITDA − EBIT.`],
  tip:`To undo taxes, DIVIDE net income by (1 − T). Don't multiply or subtract the tax rate.`,
  explain:`<p>Read the statement top to bottom: each line removes a cost until you reach what belongs to stockholders. Notice that rising EBIT does not guarantee rising net income: Allied's EBIT rose from $263M to $278M but net income fell from $152.3M to $146.3M because interest jumped from $60M to $83M.</p>
  <p><b>Example (Problem 3-2):</b> NI $15M, T = 25%. EBT = 15 ÷ 0.75 = $20M. If EBIT is $20.8M, interest = $0.8M.</p>`},
 '3.1e':{notes:[
   `Shows how much of earnings was <b>retained</b> vs. paid as dividends.`,
   `It connects the income statement to the balance sheet through retained earnings.`,
   `To find dividends: Addition to RE = Ending RE − Beginning RE, then Dividends = NI − Addition to RE.`],
  tip:`Addition to retained earnings is ending minus beginning RE.`,
  explain:`<p>Retained earnings is the running total of all profit kept in the business since it started. Each year it grows by net income minus dividends. Allied: 750 + 146.3 − 86.3 = $810M ending retained earnings.</p>`},
 '3.2a':{notes:[
   `<b>NOPAT</b> = EBIT(1 − T): profit if the firm had no debt; used to judge operations only.`,
   `<b>FCF</b> = cash left after paying for the investment needed to run and grow the business. Left bracket = cash from operations; right bracket = reinvestment.`,
   `<b>CapEx</b> = Δ net plant and equipment + depreciation. <b>ΔNOWC</b> = NOWC this year − last year.`,
   `Negative FCF is not always bad: growth firms invest more than they generate.`],
  tip:`CapEx = ΔNet PPE + depreciation (not just the change in net PPE).`,
  explain:`<p>Why add depreciation back? It reduced profit but no cash left the firm. Why CapEx = ΔNet PPE + depreciation? Net plant ends the year as beginning net plant + new spending − depreciation; solving for new spending gives ΔNet PPE + depreciation. (Allied: (1,000 − 870) + 100 = $230M.)</p>
  <p><b>Allied 2021:</b> (208.5 + 100) − (230 + 150) = −$71.5M. <b>D'Leon 2021 (slide 11):</b> −$744,201. Negative FCF is fine if the new investments will earn good returns.</p>`},
 '3.2b':{notes:[
   `Accounting statements use book values; they don't show how investors value the firm.`,
   `<b>MVA</b> = market value of equity − book value of equity. Positive MVA = management added wealth.`,
   `<b>EVA</b> = NOPAT − dollar cost of all capital used: the year's economic profit. It can be measured for a division.`,
   `Profitable investments, strong FCF, and cost control raise EVA and the stock price (MVA).`],
  tip:`Market value of equity = price × shares. To find shares: (book equity + MVA) ÷ price.`,
  explain:`<p><b>D'Leon:</b> 2020 market value $850,000 vs. book $663,768 gives MVA +$186,232. In 2021 the stock fell to $2.25, so market value $225,000 vs. book $492,592 gives −$267,592: shareholder wealth was destroyed. The <i>change</i> in MVA each year is also what the board watches.</p>
  <p><b>Question 3-9 (how EVA and MVA connect):</b> managers affect EVA directly (raise NOPAT, use less capital, lower the cost of capital) and MVA through the stock price. Sustained positive EVA raises expected future cash flows and so the stock price. Many texts state this as "MVA reflects the present value of expected future EVAs"; confirm that exact wording in your book. A rising overall market can also lift MVA without any management skill.</p>`},
 '3.3':{notes:[
   `<b>Progressive</b> tax: higher income, higher rate. <b>Marginal rate</b> = rate on the next dollar; <b>average rate</b> = taxes ÷ taxable income (lower than marginal).`,
   `<b>Interest paid</b> is tax deductible; <b>dividends paid</b> are not. $1 of dividends needs 1 ÷ (1 − T) = $1.33 of pretax income at 25%.`,
   `<b>Double taxation:</b> corporate income is taxed, then dividends are taxed again to individuals. A corporation excludes 50% of dividends it receives.`,
   `Know the terms: loss carryforward (up to 80% of taxable income), capital gains (≤ 1 year: ordinary rates; &gt; 1 year: 0/15/20%), AMT, traditional vs. Roth IRA, S corporation.`],
  tip:`Only the top slice of income is taxed at the top bracket rate.`,
  explain:`<p><b>Bracket example (single filer, $45,000 taxable income):</b> tax = 4,617.50 + (45,000 − 40,125)(0.22) = $5,690, so the average rate is 12.64% while the marginal rate is 22%.</p>
  <p><b>Details:</b> corporate taxes in your problems are a flat 25% (21% federal under the TCJA plus a state add-on). Loss example: $12M loss then $10M income, so apply $8M (80% cap), tax on $2M = $500,000, and $4M of loss is left. Traditional IRA: deductible now, taxed at withdrawal after 59½. Roth IRA: no deduction, qualified withdrawals tax-free. AMT: a parallel tax so high earners can't use deductions to avoid tax (the TCJA repealed the corporate AMT). S corporation: 100 or fewer shareholders, taxed like a partnership.</p>`}
},
ch4:{
 '4.1':{notes:[
   `Ratios standardize numbers so firms of different sizes can be compared.`,
   `Compare through time (<b>trend analysis</b>) and with competitors or the industry (<b>benchmarking</b>). Never judge from one ratio.`,
   `<b>Five categories:</b> liquidity (can we pay?), asset management (right amount of assets?), debt management (right mix, can we cover interest?), profitability (prices vs. costs), market value (do investors like it?).`],
  tip:`Memorize which ratio belongs to which category; exam questions often hide the category.`,
  explain:`<p>A $10M profit means different things for a $100M firm and a $10B firm. Dividing by sales, assets, or equity puts firms on a common scale. Categories and ratios: liquidity (current, quick); asset management (inventory turnover, DSO, fixed assets turnover, total assets turnover); debt management (debt to capital, TIE); profitability (operating margin, profit margin, BEP, ROA, ROE, ROIC); market value (P/E, M/B, EV/EBITDA).</p>`},
 '4.2':{notes:[
   `Liquidity ratios show whether the firm can pay what is due within a year.`,
   `<b>Quick ratio</b> removes inventory, the least liquid current asset.`,
   `A falling current ratio is a warning sign; a very high one isn't automatically good (idle cash, old inventory).`],
  tip:`Changing inventory changes the current ratio but NOT the quick ratio.`,
  explain:`<p>Allied: current ratio 1,000 ÷ 310 = 3.2× (industry 4.2×); quick ratio (1,000 − 615) ÷ 310 = 1.2× (industry 2.2×). A struggling firm pays suppliers slowly and borrows from the bank, so current liabilities rise and the ratio falls. Slide example, D'Leon 2022E: current 2.34× and quick 0.84× vs. industry 2.70× and 1.00×, so liquidity is weak but improving.</p>`},
 '4.3':{notes:[
   `Do we have too much or too little of each asset for our sales level?`,
   `<b>Inventory turnover</b>: low means excess or obsolete inventory. Textbook: COGS ÷ inventories (your slides use sales; ask your professor).`,
   `<b>DSO</b> = average days to collect after a sale; compare it to credit terms.`,
   `<b>FA turnover</b> and <b>TA turnover</b> = sales per dollar of assets. FA fine but TA low means the excess is in current assets.`],
  tip:`Working backward: receivables = DSO × (Sales ÷ 365); sales = turnover × assets.`,
  explain:`<p>Allied: inventory turnover 2,100 ÷ 615 = 3.4× (industry 7.6×); DSO 375 ÷ (3,000 ÷ 365) = 45.6 days (industry 36); FA turnover 3.0× (2.8×); TA turnover 1.5× (1.8×). Why COGS in inventory turnover? Sales are at market prices and inventory is at cost, so sales would overstate turnover.</p>
  <p>Older firms can show a high FA turnover because their assets are heavily depreciated, not because they are more efficient.</p>`},
 '4.4':{notes:[
   `<b>Financial leverage</b> = using debt. It magnifies returns in good years and losses in bad years.`,
   `<b>Total debt</b> = notes payable + long-term debt only (not accounts payable or accruals).`,
   `<b>TIE</b> uses EBIT because interest is paid before taxes.`,
   `Creditors want low debt ratios; stockholders may want leverage to raise ROE.`],
  tip:`Debt to capital divides by debt PLUS equity, not by equity alone.`,
  explain:`<p><b>Firm U (no debt) vs. Firm L (50% debt at 10%), same EBIT:</b> good year ROE 33.75% vs. 60%; expected 11.25% vs. 15%; bad year 0% vs. −10%. Leverage raises the upside and the risk because interest is fixed.</p>
  <p>Allied: debt ratio 860 ÷ 1,800 = 47.8% (industry 36.4%); TIE 278 ÷ 83 = 3.3× (industry 6.0×). Slide example, D'Leon 2022E: debt ratio 26.4%, TIE 7.0×, better than industry.</p>`},
 '4.5':{notes:[
   `<b>Operating margin</b> and <b>profit margin</b> = how much of each sales dollar becomes profit.`,
   `<b>BEP</b> ignores taxes and debt, so it compares firms fairly. It is NOT affected by tax rates, the interest rate, or the debt ratio.`,
   `<b>ROA</b> = return on all assets. <b>ROE</b> = return on stockholders' money. <b>ROIC</b> = NOPAT over debt + equity.`,
   `More debt (assets constant): equity ↓, interest ↑, NI ↓, ROA ↓, ROE may go either way. If BEP &gt; interest rate, debt raises ROE.`],
  tip:`BEP uses EBIT. Taxes and interest are below EBIT, so they can't change BEP.`,
  explain:`<p>Allied: operating margin 9.3%, profit margin 4.9%, BEP 13.9%, ROA 7.3%, ROE 15.6%, ROIC 11.6%. ROE exceeds ROA because debt spreads the same profit over less equity: ROE = ROA × equity multiplier.</p>
  <p>Problem 4-16 shows the leverage effect: BEP is 35% and debt costs 8%, so adding debt lifts ROE from 26.25% to 34.93%.</p>`},
 '4.6':{notes:[
   `<b>P/E</b> = dollars investors pay for $1 of earnings. <b>M/B</b> = market price vs. book value per share.`,
   `High P/E and M/B suggest strong growth and low risk. M/B is usually above 1.0 because book values are historical cost.`,
   `<b>EV</b> = equity market value + debt − cash, so a cash-rich, inefficient firm doesn't look better. Use debt at book (par) unless told otherwise.`],
  tip:`To get P/E from M/B: price = M/B × BVPS first, then price ÷ EPS.`,
  explain:`<p>Allied: P/E 23.06 ÷ 1.95 = 11.8× (industry 13.6×); BVPS 940 ÷ 75 = $12.53; M/B 1.8× (2.6×); EV = 1,729.5 + 860 − 10 = $2,579.5M; EV/EBITDA 6.8× (9.2×). Slide example, D'Leon 2022E: P/E 12.0×, M/B 1.56×.</p>`},
 '4.7':{notes:[
   `DuPont splits ROE into <b>expense control</b> (profit margin), <b>asset utilization</b> (TA turnover), and <b>debt utilization</b> (equity multiplier).`,
   `ROA = PM × TATO. ROE = ROA × EM. EM = 1 + Debt/Equity. Liabilities ÷ assets = 1 − 1/EM.`,
   `<b>Three problems with ROE:</b> it ignores risk; it ignores the amount of capital invested; it can lead managers to reject profitable projects. EVA fixes this.`],
  tip:`Working backward: TATO = ROA ÷ PM; EM = ROE ÷ ROA.`,
  explain:`<p>Allied: 4.88% × 1.5 × 2.13 = 15.6%. Cutting debt to the industry multiplier (1.73) would drop ROE to 4.88% × 1.5 × 1.73 = 12.66%. Slide example, D'Leon 2022E: 3.6% × 2.0 × 1.8 = 13.0%.</p>
  <p>On the ROE problems: a 45% ROE on $1,000,000 can create more wealth than a 50% ROE on $50,000, and EVA = Equity × (ROE − cost of equity) accounts for both size and risk.</p>`},
 '4.8':{notes:[
   `<b>Benchmarking</b> = compare to a chosen set of close competitors, not only an industry average. <b>Trend analysis</b> = plot a ratio over several years.`,
   `<b>Limitations:</b> conglomerates are hard to compare; "average" isn't necessarily good; seasonality; <b>window dressing</b>; inflation distorts book values; different accounting practices; hard to call a ratio good or bad.`,
   `Ratio analysis is a starting point: use several ratios, several years, and industry context before judging a firm.`],
  tip:`Never conclude from a single ratio or a single year.`,
  explain:`<p>The Barry Computer table is a practice case: its liquidity and debt are about average, but slow collections (DSO 76 days vs. 35) and low asset turnover (1.70× vs. 3.0×) pull ROA and ROE below the industry, and the market ratios are well below industry.</p>`}
},
ch5:{
 '5.1':{notes:[
   `A <b>time line</b> shows WHEN cash flows occur. Time 0 = today; each tick is the end of one period and the start of the next.`,
   `Write the interest rate above the line and cash flows below it, with ? for the unknown.`,
   `Jan 1, 2021 to Jan 1, 2024 is N = 3. A payment on Jan 1, 2022 sits at Time 1.`],
  tip:`Draw the time line first; most timing mistakes come from skipping it.`,
  explain:`<p>Common shapes: a <b>lump sum</b> (one cash flow), an <b>ordinary annuity</b> (equal payments at Times 1, 2, 3 ...), and <b>uneven cash flows</b>. Negative numbers on the line are money you pay out.</p>`},
 '5.2':{notes:[
   `<b>Compounding</b> = going from PV to FV. <b>Compound interest</b> = interest on interest; <b>simple interest</b> = interest on principal only.`,
   `FV = PV(1 + I)<sup>N</sup>. $100 at 10% for 3 years = $133.10.`,
   `<b>Calculator:</b> clear TVM, 1 payment per year, END mode. N=3, I/YR=10, PV=−100, PMT=0, CPT FV = 133.10.`],
  tip:`Enter I/YR as 10, not 0.10. PV is negative (money out), so FV comes back positive.`,
  explain:`<p>Each year's interest is added to the balance, so next year you earn interest on a bigger amount: $100 → $110 → $121 → $133.10. A larger rate or longer time means a larger FV. Simple interest would give only $100 + 100(0.10)(3) = $130.</p>
  <p>Power of compounding (slides): saving $1,095 a year at 12% from age 20 to 65 gives $1,487,262; starting at 40 gives only $146,001.</p>`},
 '5.3':{notes:[
   `<b>Discounting</b> = going from FV to PV: PV = FV ÷ (1 + I)<sup>N</sup>. The rate is your <b>opportunity cost</b>.`,
   `$100 due in 3 years at 10% = $75.13 today.`,
   `<b>As time is extended, PV falls. As the rate rises, PV falls.</b>`,
   `To compare offers, value them at the same date.`],
  tip:`This is a stated exam topic: how PV changes with time and with the interest rate.`,
  explain:`<p>$75.13 invested at 10% grows to $100 in 3 years, so $75.13 is the PV. The effect of time and rate is dramatic: $1 million due in 100 years is worth $7,604 today at 5% but about $0.01 at 20%. For ST-3c, find each offer's value at one date (today or Jan 1, 2025) to compare.</p>`},
 '5.4':{notes:[
   `Know PV, FV, and N, solve for I: I = (FV ÷ PV)<sup>1/N</sup> − 1, or on the calculator CPT I/YR.`,
   `A <b>growth rate</b> (sales, EPS) is the same math.`,
   `Don't divide total growth by years: sales that double in 5 years grew 14.87% a year, not 20%.`],
  tip:`Enter PV and FV with opposite signs or the calculator returns an error.`,
  explain:`<p>Example: $100 grows to $125.97 in 3 years: (1.2597)<sup>1/3</sup> − 1 = 8%. Borrowing vs. lending (Problem 5-12 a–b) is the same math with the signs flipped, so both parties see the same rate.</p>`},
 '5.5':{notes:[
   `Know PV, FV, and I, solve for N with the calculator (CPT N).`,
   `<b>Doubling:</b> use PV = −1 and FV = 2. The answer doesn't depend on the amount; a higher rate means a shorter time.`,
   `If there are regular payments, enter them as PMT (Problem 5-5).`],
  tip:`The calculator solves N for you; there is no easy algebra.`,
  explain:`<p>Slide: sales growing 20% a year double in about 3.8 years. At 6% doubling takes 11.90 years; at 13%, 5.67; at 21%, 3.64; at 100%, exactly 1.</p>`},
 '5.6':{notes:[
   `An <b>annuity</b> = equal payments at evenly spaced intervals for a set number of periods.`,
   `<b>Ordinary (deferred) annuity</b> = payments at the END of each period (default). <b>Annuity due</b> = payments at the BEGINNING, so each earns one more period.`,
   `A <b>perpetuity</b> never ends. <b>Uneven cash flows</b> aren't equal, so the shortcuts don't apply.`],
  tip:`Annuity due is not required for your exam (slide 31).`,
  explain:`<p>If the payments aren't equal or aren't evenly spaced, it isn't an annuity and you must value each payment separately. Annuity due appears in the assigned problems (ST-2d, 5-6b, 5-14d, 5-15d) but your slides say you don't need it for the exam.</p>`},
 '5.7':{notes:[
   `FVA = value at the end of the last payment: FVA = PMT × [(1 + I)<sup>N</sup> − 1] ÷ I. $100 for 3 years at 10% = $331.00.`,
   `<b>Calculator:</b> N, I/YR, PV=0, PMT (negative), CPT FV. To find the payment for a goal: enter FV, CPT PMT.`,
   `<b>Annuity due</b> = ordinary × (1 + I) (or BGN mode, then switch back to END).`],
  tip:`Leave BGN mode on and every later ordinary-annuity answer will be wrong. Switch back to END.`,
  explain:`<p>Why $331? The first payment compounds for 2 years (121), the second for 1 year (110), and the last for none (100). The same setup solves the retirement problem (5-19): N = age at retirement − current age.</p>`},
 '5.8':{notes:[
   `PVA = today's value of the whole payment stream: PVA = PMT × [1 − 1 ÷ (1 + I)<sup>N</sup>] ÷ I. $100 for 3 years at 10% = $248.69.`,
   `<b>Calculator:</b> N, I/YR, PMT, FV=0, CPT PV. The same keys give the loan amount, the rate (CPT I/YR), or the payment (CPT PMT).`,
   `Retirement: the nest egg is a PV; solve for the withdrawal PMT.`],
  tip:`This section comes from your slides, not the textbook app, so use the slide formula and calculator steps.`,
  explain:`<p>$248.69 = 90.91 + 82.64 + 75.13 (each payment discounted). Problem 5-17 is the rate version: enter PV, PMT, N and CPT I/YR (8.00%). Problem 5-19c is the payment version: enter PV (the nest egg), N = retirement years, and CPT PMT.</p>`},
 '5.9':{notes:[
   `A perpetuity pays the same amount forever. PV = PMT ÷ I.`,
   `$600 forever at 5% = $12,000; at 10% = $6,000. Double the rate, half the value.`,
   `No TVM keys are needed.`],
  tip:`Not on your slides. Ask your professor whether it will be tested.`,
  explain:`<p>If you deposit PV and earn I each year, you can withdraw PMT = PV × I forever without touching the principal, so PV = PMT ÷ I.</p>`},
 '5.10':{notes:[
   `Discount each cash flow back to Time 0 separately and add: PV = Σ CF<sub>t</sub> ÷ (1 + I)<sup>t</sup>. Slide: 100, 300, 300, −50 at 10% = $530.08.`,
   `FV of the stream = PV × (1 + I)<sup>N</sup> at the last date.`,
   `<b>Calculator:</b> CF worksheet: CF0, then each CF and its frequency, then NPV and the rate.`],
  tip:`Streams that pay more earlier are worth more.`,
  explain:`<p>Problem 5-18: Stream B has $250 in Year 1 vs. $150 for Stream A, and earlier dollars are discounted less, so B ($1,522.73) beats A ($1,505.84) at 5%. At 0% there is no discounting and both equal $1,750.</p>`},
 '5.11':{notes:[
   `<b>Nominal (quoted, APR)</b> rate ignores compounding and is never used directly in calculations. <b>Periodic rate</b> = nominal ÷ m; <b>N</b> = years × m.`,
   `<b>EAR</b> = (1 + I<sub>NOM</sub>/m)<sup>m</sup> − 1 = the rate actually earned. 10% semiannual = 10.25%. EAR = nominal only when m = 1.`,
   `More frequent compounding: larger FV (smaller and smaller gains) and smaller PV.`,
   `Same-EAR problems: find Bank A's EAR, then solve for Bank B's nominal rate.`],
  tip:`Use I/YR = nominal ÷ m and N = years × m together; mixing annual and periodic numbers is the classic error.`,
  explain:`<p>Slide: EAR at a 10% nominal rate is 10.00% annually, 10.38% quarterly, 10.47% monthly, 10.52% daily. For a payment pattern that doesn't match compounding (annual payments, semiannual compounding), either compound each payment (100(1.05)⁴ + 100(1.05)² + 100 = $331.80) or convert to EAR (10.25%) and use an annual annuity.</p>`},
 '5.12':{notes:[
   `An <b>amortized loan</b> = equal payments covering interest and principal; FV = 0 when you find the payment.`,
   `Each period: INT = beginning balance × I; PRIN = PMT − INT; new balance = old − PRIN.`,
   `Interest falls and principal rises each payment because interest is charged on a shrinking balance.`],
  tip:`After CPT PMT, use 2nd AMORT (P1, P2) to read interest, principal, and balance.`,
  explain:`<p>Slide: $1,000, 10%, 3 payments of $402.11. Year 1: interest $100, principal $302.11, balance $697.89; year 2 interest $69.79, and so on. Mortgage: $300,000, 30 years, 6%: N = 360, I/YR = 0.5, payment about $1,799; first month's interest $1,500, so only about $299 reduces the loan.</p>`}
},
ch6:{
 '6.1':{notes:[
   `The price of <b>debt capital</b> = the <b>interest rate</b>. The price of <b>equity capital</b> = the <b>required return</b> (dividends + capital gains).`,
   `<b>4 factors affect the cost of money:</b> ★ <b>production opportunities</b> (more opportunities, more demand for funds, higher rates); ★ <b>time preferences for consumption</b> (impatient savers need a higher rate).`,
   `★ <b>Risk</b>: more risk, higher required return. ★ <b>Expected inflation</b>: lenders want compensation for lost purchasing power.`],
  tip:`Be able to name all four factors and say which way each pushes rates.`,
  explain:`<p>Question 6-4 applies this: a young area has many borrowers and few savings, so demand for funds is high and rates are higher; an old area has the reverse. Nationwide banks move funds between areas, narrowing the gap. Question 6-5: a new productive process raises demand for capital (rates up at first), while cheaper energy lowers expected inflation (rates down in the long run).</p>`},
 '6.2':{notes:[
   `★ <b>r (or k)</b> = any nominal rate. ★ <b>r*</b> = real risk-free rate: the rate on a riskless security if there were no inflation (typically 1%–4%).`,
   `★ <b>r<sub>RF</sub></b> = nominal risk-free rate (T-bill) = r* + IP.`,
   `When inflation is high, use the cross-product: (1 + r<sub>RF</sub>) = (1 + r*)(1 + IP).`],
  tip:`Your slides write k; the textbook writes r. Same thing.`,
  explain:`<p>Problem 6-6: r* = 5%, inflation 18%: (1.05)(1.18) − 1 = 23.9%, not 23%. The extra 0.9% is r* × IP = 5% × 18%; it's negligible at low inflation but not at 18%.</p>`},
 '6.3':{notes:[
   `<b>r = r* + IP + DRP + LP + MRP</b>`,
   `★ <b>IP</b> = average expected inflation over the security's life. ★ <b>DRP</b> = default risk (corporates only). ★ <b>LP</b> = liquidity premium (corporates). ★ <b>MRP</b> = maturity risk premium (long-term securities).`,
   `<b>Which premiums apply:</b> T-bill = r* + IP. Long-term Treasury adds MRP. Short-term corporate adds DRP + LP. Long-term corporate has all four.`,
   `Corporate yield = Treasury yield + DRP + LP. <b>Interest rate risk</b> (prices fall when rates rise) is why long-term bonds carry an MRP; <b>reinvestment rate risk</b> hits short-term securities.`],
  tip:`If a problem gives you DRP, LP, and MRP for a T-bill, they are distractors.`,
  explain:`<p>Most problems give you all but one piece, so rearrange: r* = T-bill − IP (6-2); MRP = Treasury − r* − IP (6-5); DRP = corporate − Treasury − LP (6-4). ST-2 d: average inflation over 8 years (3 yrs at 2%, 5 at 4%) = 3.25%, MRP = 0.1 × 7 = 0.7%, so the 8-year Treasury yields 3 + 3.25 + 0.7 = 6.95%.</p>`},
 '6.4':{notes:[
   `★ <b>Term structure</b> = relationship between yields and maturities. ★ <b>Yield curve</b> = the graph of it.`,
   `<b>Shapes:</b> normal (upward sloping), inverted/abnormal (downward sloping), humped (middle highest), flat.`,
   `Corporate yield curves lie above Treasuries; the spread (DRP + LP) widens as the rating falls.`],
  tip:`Plot yield (vertical) against maturity (horizontal) for securities of the same risk.`,
  explain:`<p>The curve's shape carries information about what investors expect interest rates to do (next sections). The slide shows the March 2015 Treasury yield curve.</p>`},
 '6.5':{notes:[
   `★ <b>Pure expectations theory (PEH)</b> = the yield curve's shape reflects expected future short-term rates: rates expected to rise, the curve slopes up; expected to fall, it slopes down.`,
   `PEH assumes the <b>MRP on Treasuries is zero</b>. A long-term rate is an AVERAGE of current and expected future short-term rates.`,
   `Because a long rate is an average, short-term rates fluctuate more than long-term rates.`],
  tip:`r* = 3% and inflation 2% forever with no MRP: every Treasury yields 5%, so the curve is flat.`,
  explain:`<p>Think of a 2-year bond as two 1-year bonds back to back; if investors are indifferent, the 2-year yield is the average of today's 1-year rate and next year's expected 1-year rate. Most evidence shows lenders prefer short-term securities, so the real MRP is positive; PEH is a simplification.</p>`},
 '6.6':{notes:[
   `If PEH holds, you can "back out" the market's expected future rates from today's yields.`,
   `<b>Geometric:</b> (1 + Y<sub>2</sub>)² = (1 + Y<sub>1</sub>)(1 + f). Slide: (1.062)² = (1.060)(1 + X), so X = 6.4004%.`,
   `<b>Arithmetic shortcut:</b> f = 2 × Y<sub>2</sub> − Y<sub>1</sub>. CD example: 2(2.8) − 2.4 = 3.2%.`],
  tip:`For multi-year forward rates take the (n − m)-th root: square root or cube root. ST-3 asks for geometric averages.`,
  explain:`<p>General formula: (1 + Y<sub>n</sub>)<sup>n</sup> = (1 + Y<sub>m</sub>)<sup>m</sup>(1 + f)<sup>n−m</sup>. Example (ST-3c, 2-year rate one year from now): (1.063)³ ÷ 1.060 = (1 + f)² = 1.133167, so 1 + f = 1.0645 and f = 6.45%. Slide 15: 1-year 4%, 2-year 4.5%: expected 1-year rate next year = 2(4.5) − 4 = 5.0%.</p>`},
 '6.7':{notes:[
   `<b>Federal Reserve policy:</b> a larger money supply lowers short-term rates at first, but can raise expected inflation (higher rates later).`,
   `<b>Federal budget deficit:</b> more government borrowing, higher rates. <b>Business activity:</b> rates rise in expansions and fall in recessions.`,
   `<b>International factors:</b> a ★ <b>foreign trade deficit</b> (imports &gt; exports) is financed by foreign borrowing, which adds to demand for funds and raises rates.`],
  tip:`For each factor, say whether it raises or lowers rates and why.`,
  explain:`<p>Question 6-6 combines these: if Congress forces the Fed to expand the money supply, short-term rates fall at first, long-term rates rise on inflation fears (a steeper curve), and later the whole curve moves up as inflation rises. Check your textbook's answer key for how it words the timing.</p>`},
 '6.8':{notes:[
   `Rate changes affect a firm's choice between short-term and long-term debt and its investment decisions.`,
   `Rates are cyclical: in a recession expect rates to fall, so borrow short-term and refinance later at lower rates (watch refinancing risk).`,
   `<b>Unavailable:</b> the textbook text of section 6.8 was not provided, so these notes come from Question 6-3 and your learning objectives.`],
  tip:`Section 6.8 is not in the materials I have; Question 6-3 is the example from your assigned list.`,
  explain:`<p>The trade-off in Question 6-3: short-term debt is cheaper now and lets you refinance at lower rates, but it must be rolled over (rates could rise or credit could tighten). Long-term debt gives certainty at a higher locked-in rate.</p>`}
}
};
Object.keys(NBX).forEach(cid=>{
  const c=CHAPTERS.find(x=>x.id===cid); if(!c||!c.notebook) return;
  c.notebook.forEach(sec=>{ const e=NBX[cid][sec.num]; if(e) Object.assign(sec,e); });
});

/* ============================================================
   PROBLEM-LEVEL: "Why it works", exam tip, and assigned/optional labels
   ============================================================ */
const PBX = {
ch3:{
 p31:{tag:`Assigned`,why:`The balance sheet must balance, so any missing line is a total minus the lines you know. NOWC leaves out notes payable (financing), so NOWC − NWC equals notes payable when there is no excess cash.`,tip:`Work in order: total debt, current assets, total liabilities, current liabilities, then accounts payable and accruals.`},
 p32:{tag:`Assigned`,why:`Net income is what is left after interest and taxes. Dividing by (1 − T) undoes the tax and gives EBT; EBIT − EBT is the interest.`,tip:`Divide net income by (1 − T). Subtracting the tax rate is the common error.`},
 p33:{tag:`Assigned`,why:`EBITDA = EBIT + D&A. Net income lets you rebuild EBT, then EBIT, so the gap between EBITDA and EBIT is D&A.`,tip:`Rebuild upward in order: NI, EBT, EBIT, then D&A.`},
 p34:{tag:`Extra practice`,why:`Retained earnings grows by net income minus dividends, so dividends = net income − the addition to retained earnings.`,tip:`Addition to retained earnings = ending RE − beginning RE.`},
 p35:{tag:`Assigned`,why:`MVA = market value of equity − book equity, so market value = book + MVA. Dividing by the price per share gives the number of shares.`,tip:`Don't divide book equity by the price. Add MVA first.`},
 st2:{tag:`Assigned`,why:`Each part uses a definition: NI from EBIT and interest; NOWC drops notes payable while NWC doesn't; FCF = cash from operations − reinvestment, and CapEx comes from the change in net plant plus depreciation.`,tip:`CapEx = ΔNet PPE + depreciation. ΔNOWC is 0 when NOWC is constant.`},
 q35:{tag:`Assigned`,tip:`Give at least two reasons (GAAP discretion, incentives or fraud) and name Sarbanes-Oxley.`},
 q39:{tag:`Assigned`,tip:`Name both measures' formulas and say which one the stock market sets.`},
 q310:{tag:`Assigned`,tip:`Use a bracket example and show that the average rate is below the marginal rate.`}
},
ch4:{
 p41:{why:`DSO is receivables expressed in days of sales, so receivables = DSO × average daily sales.`,tip:`Divide annual sales by 365 first.`},
 p42:{why:`With M/B = 1, book equity equals market equity (price × shares), so debt = total capital − equity.`,tip:`Debt to capital divides debt by debt + equity (total capital), not by equity.`},
 p43:{why:`ROA = PM × TATO and ROE = ROA × EM, so each missing piece is a single division.`,tip:`TATO = ROA ÷ PM and EM = ROE ÷ ROA. Check: PM × TATO × EM should equal ROE.`},
 p44:{why:`M/B compares price with book value per share. EV is what it costs to buy the whole firm: equity + debt − cash.`,tip:`Only notes payable + long-term debt counts as debt. Subtract cash.`},
 p45:{why:`M/B and book value per share give the price; price ÷ EPS is P/E.`,tip:`P/E is not M/B ÷ EPS. Find the price first.`},
 p414:{why:`The debt ratio splits assets into debt and equity; EBIT − interest − taxes gives net income; ROE = net income ÷ equity.`,tip:`Equity = (1 − debt ratio) × total assets. Last year's 5% ROE is a distractor.`},
 p415:{why:`Selling inventory raises cash; using that cash to repurchase equity shrinks equity while net income stays the same, so ROE rises. The quick ratio excludes inventory.`,tip:`Quick ratio ignores inventory, so cutting inventory (and using the cash elsewhere) leaves it unchanged here.`},
 p416:{why:`BEP gives EBIT. Debt adds a fixed interest cost but spreads the same profit over less equity. Because BEP (35%) is far above the cost of debt (8%), ROE rises.`,tip:`Compute EBIT = BEP × assets first, then do the two financing cases.`},
 p419:{why:`Raising notes payable and spending it on inventory adds the same amount to current assets and to current liabilities, so solve (CA + x) ÷ (CL + x) = 2.`,tip:`The initial inventory figure isn't needed.`},
 p420:{why:`DSO links receivables to sales. New sales (down 15%) and a new DSO give the new receivables.`,tip:`Find annual sales from the old DSO first, then cut 15%.`},
 p421:{why:`If P/E stays constant, price moves in proportion to EPS, so new price = P/E × new EPS.`,tip:`New EPS uses the new share count (621,000), not the old one.`},
 p422:{why:`Each ratio ties one line of the statements to sales or COGS, so work from total assets to sales, then to each asset; the balance sheet identity finishes it.`,tip:`Inventory turnover uses COGS (from the gross margin), not sales.`},
 pbarry:{why:`Each ratio is one formula applied to the exhibit; comparing with the industry shows strengths and weaknesses.`,tip:`Show the formula and numbers for each ratio, then interpret it against the industry.`},
 q417:{tip:`BEP uses EBIT, so the tax rate, the interest rate, and the debt ratio cannot change it.`},
 qslide29:{tip:`Liabilities ÷ assets = 1 − 1/EM.`},
 qslide30:{tip:`Rebuild EM from liabilities/assets, then PM = ROE ÷ (TATO × EM).`}
},
ch5:{
 st2:{why:`Annual compounding uses FV = PV(1 + I)<sup>N</sup>; quarterly changes the rate and number of periods; payments on Jan 1 of 2022–2024 are end-of-period payments (ordinary annuity); payments starting Jan 1, 2021 are an annuity due.`,tip:`Count periods from the dates: Time 0 = Jan 1, 2021.`},
 st3:{why:`Each part solves one TVM variable: PV (a), PMT (b), compare at one date (c), I (d, e), PMT with semiannual periods (f), EAR (g).`,tip:`In part f use I = 4% per half-year and N = 6; the $400 at Time 2 grows for 6 half-years.`},
 st4:{why:`Two banks have the same effective rate when their EARs match: find Bank A's EAR, then solve for Bank B's nominal rate with m = 12.`,tip:`More frequent compounding means a lower nominal rate for the same EAR.`},
 p51:{why:`Money grows by (1 + I) each year, so FV = PV(1 + I)<sup>N</sup>.`,tip:`Type 6 for I/YR, not 0.06.`},
 p52:{why:`Discounting at the opportunity cost reverses compounding: PV = FV ÷ (1 + I)<sup>N</sup>.`},
 p53:{why:`Solve FV = PV(1 + I)<sup>N</sup> for I.`,tip:`Enter PV and FV with opposite signs.`},
 p54:{why:`Doubling depends only on the rate, not on the amount, so use PV = −1 and FV = 2.`},
 p55:{why:`The balance is a growing lump sum plus growing annual deposits; the calculator solves for N.`,tip:`PV and PMT are both outflows (negative); FV is positive.`},
 p56:{why:`An annuity due pays at the beginning, so each payment earns one more period: multiply the ordinary value by (1 + I).`,tip:`Annuity due is not on your exam (slide 31).`},
 p57:{why:`Uneven cash flows are valued one at a time and added; the future value moves the PV forward to Year 6.`,tip:`FV at Year 6 = PV × (1.11)<sup>6</sup>.`},
 p58:{why:`A monthly loan uses the monthly rate and number of months; the EAR shows the true annual cost of monthly compounding.`,tip:`I/YR = 8 ÷ 12 and N = 60.`},
 p59:{why:`Same formulas, different periods: more time raises FV and lowers PV.`},
 p510:{why:`A higher rate raises FV and lowers PV. Present value is today's worth of a future amount.`},
 p511:{why:`A growth rate is the rate that compounds the starting value into the ending value.`,tip:`Total growth ÷ years ignores compounding.`},
 p512:{why:`Borrowing and lending are the same rate calculation with the signs flipped; the annuity version needs the calculator.`},
 p513:{why:`Doubling time depends only on the rate; a higher rate means a shorter time.`},
 p514:{why:`Use the FVA formula; at 0% there is no interest, so the value is just the sum.`,tip:`At 0% the formula divides by zero; multiply payment × years.`},
 p515:{why:`PVA discounts every payment; at 0% it is just the sum.`},
 p516:{why:`A perpetuity's value is the payment divided by the rate.`,tip:`Not on your slides; ask your professor.`},
 p517:{why:`The loan amount is the PV of the payments, so solve the PVA relation for the rate.`},
 p518:{why:`Discount each cash flow separately; money received earlier is worth more.`},
 p519:{why:`Saving is a future value of an annuity. Retirement withdrawals are payments supported by a present value (the nest egg).`,tip:`N = retirement age − 26 for saving; N = years in retirement for withdrawals.`},
 p522:{why:`The payment comes from the PVA relation; each payment's interest is the beginning balance × the periodic rate.`,tip:`Semiannual: I/YR = 5 and N = 20.`},
 p523:{why:`More frequent compounding means a higher effective rate, so the FV rises (by smaller and smaller amounts).`},
 p524:{why:`More frequent compounding means a higher effective rate, so the PV of a future amount falls.`},
 q523f:{},q522d:{},q510e:{}
},
ch6:{
 st2:{why:`Every yield is r* plus the premiums that apply: IP (average inflation), MRP for long-term securities, and DRP and LP for corporates.`,tip:`IP is the average inflation over the security's whole life.`},
 st3:{why:`A multi-year yield is the geometric average of the one-year rates, so each forward rate comes from dividing one compounded yield by another.`,tip:`Take the square root or cube root for multi-year forward rates.`},
 p62:{why:`A 30-day T-bill has only r* and an inflation premium.`,tip:`The liquidity, maturity risk, and default premiums are distractors for a T-bill.`},
 p63:{why:`The inflation premium is the average inflation over the security's life, added to r*.`,tip:`The 3-year IP includes this year's 2.5% plus two years of 4.25%.`},
 p64:{why:`Bonds of the same maturity share r*, IP, and MRP, so the yield gap is DRP + LP.`},
 p65:{why:`Whatever is left of the Treasury yield after r* and IP is the maturity risk premium.`},
 p66:{why:`The exact relationship multiplies (1 + r*)(1 + IP).`,tip:`Don't just add 5% + 18%; include the cross-product.`},
 q62:{tag:`Assigned`},q63:{tag:`Assigned`},q64:{tag:`Extra practice`},q65:{tag:`Extra practice`},q66:{tag:`Extra practice`},
 qslide6:{tag:`Slide exam practice`},qslide10:{tag:`Slide exam practice`},qslide15:{tag:`Slide exam practice`}
}
};
// concept tags for chapters 4 and 5
Object.assign(PBX.ch4,{q417:Object.assign({tag:`Extra practice`},PBX.ch4.q417),qslide16:{tag:`Slide exam practice`},qslide29:Object.assign({tag:`Slide exam practice`},PBX.ch4.qslide29),qslide30:Object.assign({tag:`Slide exam practice`},PBX.ch4.qslide30),qbarry:{tag:`Extra practice`}});
['q523f','q522d','q510e'].forEach(id=>{ PBX.ch5[id]={tag:`Recommended`}; });
Object.keys(PBX).forEach(cid=>{
  const c=CHAPTERS.find(x=>x.id===cid); if(!c) return;
  Object.keys(PBX[cid]).forEach(id=>{
    const it=c.homework.find(x=>x.id===id)||c.homeworkConcept.find(x=>x.id===id);
    if(it) Object.assign(it,PBX[cid][id]);
  });
});
/* homework the course assigned but that has not been provided yet (clearly marked unavailable) */
CHAPTERS.find(c=>c.id==='ch3').missingHw=[`Questions 3-1 to 3-4 and 3-7 (assigned in your slides; not provided yet)`];
CHAPTERS.find(c=>c.id==='ch4').missingHw=[`Problems 4-6 to 4-13 (assigned in your slides; not provided yet)`];
CHAPTERS.find(c=>c.id==='ch6').missingHw=[`Section 6.8 (interest rates and business decisions) is on your learning objectives, but its textbook content was not provided.`];

/* ============================================================
   EXAM REVIEW (end of each chapter)
   ============================================================ */
const EXAM = {
ch3:{
 concepts:[`The four statements: what each shows (snapshot vs. period) and how net income flows into retained earnings.`,`The balance sheet identity and working back from totals; book value vs. market value.`,`NWC vs. NOWC (operating vs. financing) and total debt vs. total liabilities.`,`The income statement from EBITDA down to net income, non-cash D&A, and working backward with (1 − T).`,`NOPAT and free cash flow, including CapEx from net PPE; why negative FCF isn't always bad.`,`MVA and EVA as measures of managers' performance.`,`Progressive taxes, marginal vs. average rates, and how interest and dividends are taxed.`],
 formulas:[[`Assets = Liabilities + Equity`,`Balance sheet puzzles`],[`NWC = CA − CL`,`Short-term liquidity`],[`NOWC = (CA − excess cash) − (CL − notes payable)`,`Operating capital; FCF`],[`NI = (EBIT − Interest)(1 − T); EBT = NI ÷ (1 − T)`,`Income statement; working backward`],[`EBITDA = EBIT + D&amp;A`,`Finding D&amp;A or EBITDA`],[`Ending RE = Beginning RE + NI − Dividends`,`Dividends and retained earnings`],[`NOPAT = EBIT(1 − T)`,`Operating profit after taxes`],[`FCF = [EBIT(1 − T) + D&amp;A] − [CapEx + ΔNOWC]`,`Cash after reinvestment`],[`CapEx = ΔNet PPE + Depreciation`,`When CapEx isn't given`],[`MVA = (Price × Shares) − Book equity`,`Market's verdict; solving for shares`],[`EVA = NOPAT − (Capital × Cost of capital)`,`Year's economic profit`],[`Average tax rate = Taxes ÷ Taxable income`,`Bracket problems`],[`Pretax income for $1 of dividends = 1 ÷ (1 − T)`,`Comparing interest and dividends`]],
 mistakes:[`Mixing up NWC and NOWC (forgetting to remove notes payable).`,`Multiplying by (1 − T) when you should divide (working backward from net income).`,`Counting accounts payable or accruals in total debt.`,`Forgetting depreciation is non-cash, or using ΔNet PPE as CapEx.`,`Using book equity in MVA instead of price × shares.`,`Applying the top bracket rate to all income.`],
 diffs:[[`NWC vs. NOWC`,`NWC counts all current liabilities. NOWC removes notes payable and excess cash (financing items).`],[`Total debt vs. total liabilities`,`Debt = notes payable + long-term debt. Liabilities also include accounts payable and accruals.`],[`EBIT vs. EBITDA vs. NOPAT`,`EBITDA = EBIT + D&amp;A. NOPAT = EBIT(1 − T), profit as if there were no debt.`],[`MVA vs. EVA`,`MVA = market vs. book equity (market's view of the firm). EVA = NOPAT − dollar cost of capital (annual, can be done by division).`],[`Marginal vs. average tax rate`,`Marginal = rate on the next dollar. Average = taxes ÷ taxable income, lower under progressive taxes.`],[`Book value vs. market value`,`Book = historical cost accounting. Market = price × shares.`]],
 checklist:[`Explain what each statement shows and which is a snapshot`,`Complete a balance sheet from totals (current assets, current liabilities, A/P and accruals)`,`Calculate NWC and NOWC and explain why they differ`,`Work backward from net income to interest or D&amp;A`,`Find dividends from the retained earnings roll-forward`,`Calculate NOPAT and FCF (CapEx from net PPE)`,`Calculate MVA (including solving for shares) and explain EVA`,`Explain "tax rates are progressive" with marginal vs. average rates`],
 selftest:[0,1,2,4,5,6,8]
},
ch4:{
 concepts:[`The five ratio categories and the question each answers.`,`Liquidity: current vs. quick, and why inventory is excluded from the quick ratio.`,`Asset management: inventory turnover, DSO, FA and TA turnover, and working backward.`,`Debt management: total debt to total capital, TIE, and how leverage magnifies ROE.`,`Profitability: margins, BEP, ROA, ROE, ROIC; what BEP does and doesn't depend on.`,`Market value: P/E, M/B, EV, and EV/EBITDA.`,`The DuPont equation and the problems with ROE.`,`Benchmarking, trend analysis, and the limits of ratio analysis.`],
 formulas:[[`Current = CA ÷ CL; Quick = (CA − Inventories) ÷ CL`,`Liquidity`],[`Inventory turnover = COGS ÷ Inventories`,`Inventory control`],[`DSO = Receivables ÷ (Sales ÷ 365)`,`Collections; solving for receivables`],[`FA turnover = Sales ÷ Net FA; TA turnover = Sales ÷ TA`,`Asset utilization`],[`Debt to capital = (NP + LTD) ÷ (NP + LTD + Equity)`,`Leverage`],[`TIE = EBIT ÷ Interest`,`Ability to cover interest`],[`Operating margin = EBIT ÷ Sales; Profit margin = NI ÷ Sales`,`Margins`],[`BEP = EBIT ÷ TA`,`Comparing firms with different financing`],[`ROA = NI ÷ TA; ROE = NI ÷ Equity; ROIC = EBIT(1 − T) ÷ (Debt + Equity)`,`Returns`],[`P/E = Price ÷ EPS; M/B = Price ÷ BVPS`,`Market value`],[`EV = Equity + Debt − Cash; EV/EBITDA`,`Whole-firm value`],[`ROE = PM × TATO × EM; EM = 1 + D/E; Liabilities/Assets = 1 − 1/EM`,`DuPont problems`]],
 mistakes:[`Using sales instead of COGS in inventory turnover without checking which your professor expects.`,`Forgetting to divide annual sales by 365 in DSO.`,`Including accounts payable or accruals in total debt.`,`Thinking taxes, the interest rate, or the debt ratio change BEP.`,`Computing P/E as M/B ÷ EPS (find the price first).`,`Forgetting to subtract cash in EV.`,`Expecting the quick ratio to change when only inventory changes.`,`Mixing up ROA (÷ total assets) and ROE (÷ common equity).`],
 diffs:[[`Current vs. quick ratio`,`Quick removes inventory, the least liquid current asset.`],[`ROA vs. ROE vs. ROIC`,`ROA = NI ÷ total assets; ROE = NI ÷ common equity; ROIC = NOPAT ÷ (debt + equity).`],[`BEP vs. ROA`,`BEP = EBIT ÷ TA (before taxes and interest); ROA = NI ÷ TA.`],[`P/E vs. M/B`,`P/E = price ÷ earnings per share; M/B = price ÷ book value per share.`],[`Debt ratio vs. equity multiplier`,`Debt ratio = debt ÷ total capital; EM = total assets ÷ equity = 1 + D/E.`],[`Trend analysis vs. benchmarking`,`Trend = same firm over time; benchmarking = against close competitors.`]],
 checklist:[`Name the five ratio categories and the ratios in each`,`Calculate current and quick ratios and explain why inventory is excluded from quick`,`Work backward with DSO, turnover ratios, and gross margin (Problems 4-1, 4-20, 4-22)`,`Calculate debt to capital and TIE, and explain how leverage affects ROE`,`Calculate ROE under a new capital structure (4-14, 4-15, 4-16)`,`Explain what BEP does and does not depend on (4-17)`,`Calculate P/E, M/B, EV, and EV/EBITDA (4-4, 4-5, 4-21)`,`Use DuPont to work backward (4-3) and list the problems with ROE`],
 selftest:[0,1,2,4,5,6,8,10]
},
ch5:{
 concepts:[`Time lines and counting periods from dates.`,`FV and PV of a lump sum; how PV changes with time and rate.`,`Solving for the rate (growth rates) and for the number of periods (doubling).`,`Ordinary annuity vs. annuity due (annuity due isn't on your exam).`,`FV and PV of an annuity; solving for the payment or the rate.`,`Perpetuities and uneven cash flows.`,`Nominal, periodic, and effective annual rates; compounding more than once a year.`,`Loan amortization: payment, interest, principal, balance.`],
 formulas:[[`FV = PV(1 + I)<sup>N</sup>`,`Growing a lump sum`],[`PV = FV ÷ (1 + I)<sup>N</sup>`,`Discounting a lump sum`],[`I = (FV ÷ PV)<sup>1/N</sup> − 1`,`Rates and growth rates`],[`FVA = PMT[(1 + I)<sup>N</sup> − 1] ÷ I`,`Saving with equal payments`],[`PVA = PMT[1 − 1 ÷ (1 + I)<sup>N</sup>] ÷ I`,`Value of a payment stream; loans`],[`PMT = PV × I ÷ [1 − (1 + I)<sup>−N</sup>]`,`Loan payments`],[`PV of perpetuity = PMT ÷ I`,`Payments that never end`],[`PV = Σ CF<sub>t</sub> ÷ (1 + I)<sup>t</sup>`,`Uneven cash flows`],[`EAR = (1 + I<sub>NOM</sub>/m)<sup>m</sup> − 1`,`Comparing rates`],[`INT = Beginning balance × I; PRIN = PMT − INT`,`Amortization`]],
 mistakes:[`Typing 0.05 instead of 5 in I/YR.`,`Not clearing the TVM memory, or leaving the calculator in BGN mode.`,`Giving PV and FV the same sign.`,`Using the nominal rate for comparisons instead of EAR.`,`Dividing total growth by the number of years.`,`Counting periods wrong (Jan 1, 2022 is Time 1, not Time 0).`,`Using annual N with a periodic I (or the reverse).`],
 diffs:[[`Simple vs. compound interest`,`Simple: no interest on interest. Compound: interest on interest.`],[`Compounding vs. discounting`,`Compounding: PV to FV. Discounting: FV to PV.`],[`Ordinary annuity vs. annuity due`,`End vs. beginning of period; due = ordinary × (1 + I).`],[`Nominal vs. periodic vs. effective rate`,`Nominal: quoted. Periodic: nominal ÷ m. Effective (EAR): actually earned.`],[`FVA vs. PVA`,`FVA = value at the end of the last payment; PVA = value today.`],[`Annuity vs. perpetuity vs. uneven`,`Annuity: equal payments for N periods. Perpetuity: forever. Uneven: different amounts.`]],
 checklist:[`Draw a time line from a word problem`,`Calculate FV and PV of a lump sum by formula and by calculator`,`Explain how PV changes as time is extended or the rate rises`,`Solve for I and for N (including doubling and growth rates)`,`Calculate FV and PV of an ordinary annuity and solve for the payment`,`Calculate the PV of an uneven cash flow stream`,`Convert a nominal rate to an EAR and compare compounding frequencies`,`Compute a loan payment and the interest and principal in a payment`],
 selftest:[0,1,2,3,4,5,6,7,10]
},
ch6:{
 concepts:[`The four factors that affect the cost of money.`,`Real vs. nominal rates; r* and r<sub>RF</sub>.`,`The determinants: r = r* + IP + DRP + LP + MRP and which premiums apply to which securities.`,`The term structure, the yield curve, and its shapes.`,`The pure expectations theory and what a long-term rate averages.`,`Calculating the one-year expected rate one year from now (forward rate).`,`Other factors: Fed policy, deficits, business activity, and international factors.`],
 formulas:[[`r = r* + IP + DRP + LP + MRP`,`Required return on a debt security`],[`T-bill: r* + IP; T-bond: r* + IP + MRP`,`Treasury yields`],[`IP = (I<sub>1</sub> + … + I<sub>n</sub>) ÷ n`,`Inflation premium for an n-year security`],[`Corporate yield = Treasury yield + DRP + LP`,`Same-maturity corporate vs. Treasury`],[`(1 + r<sub>RF</sub>) = (1 + r*)(1 + IP)`,`High inflation (cross-product)`],[`(1 + Y<sub>n</sub>)<sup>n</sup> = (1 + Y<sub>m</sub>)<sup>m</sup>(1 + f)<sup>n−m</sup>`,`Forward rates (geometric)`],[`f = 2 × Y<sub>2</sub> − Y<sub>1</sub>`,`One-year forward rate (arithmetic shortcut)`]],
 mistakes:[`Adding DRP, LP, or MRP to a T-bill.`,`Forgetting that IP is an average over the life of the security.`,`Mixing the arithmetic and geometric forward-rate methods (ST-3 asks for geometric).`,`Forgetting the square or cube root in multi-year forward rates.`,`Leaving out the r* × IP cross-product when inflation is high.`],
 diffs:[[`r* vs. r<sub>RF</sub>`,`r* = real rate with no inflation. r<sub>RF</sub> = nominal T-bill rate = r* + IP.`],[`DRP vs. LP vs. MRP`,`Default risk vs. hard-to-sell vs. interest rate risk of long maturities.`],[`Interest rate risk vs. reinvestment rate risk`,`Prices fall when rates rise (long-term) vs. cash flows reinvested at lower rates (short-term).`],[`Term structure vs. yield curve`,`The relationship vs. its graph.`],[`Normal vs. inverted vs. humped curve`,`Upward vs. downward vs. middle highest.`],[`Geometric vs. arithmetic forward rate`,`Geometric compounds; arithmetic averages (close approximation).`]],
 checklist:[`Name the four factors that affect the cost of money`,`Build a Treasury or corporate yield from its premiums, and solve for a missing premium`,`Say which premiums apply to a T-bill, T-bond, and corporate bond`,`Describe the shapes of the yield curve`,`Explain the pure expectations theory`,`Calculate a one-year forward rate (geometric and arithmetic)`,`Explain how Fed policy, deficits, business activity, and trade deficits affect rates`],
 selftest:[0,1,2,3,4,5,6,8,10,13]
}
};
Object.keys(EXAM).forEach(cid=>{ const c=CHAPTERS.find(x=>x.id===cid); if(c) c.exam=EXAM[cid]; });

export { CHAPTERS as NOTEBOOK_CHAPTERS, qBox, st1QBox };
