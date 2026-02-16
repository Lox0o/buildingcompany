# Tally form build guide — Tradie recruitment

Use **/** to insert each block in Tally. Use **@** to reference answers (e.g. thank-you message). Map each field to the Airtable column name in [brackets] when you connect the integration.

---

## Step 1 — Contact & location

**Section / Group (optional)**  
Add a section or short intro: *"Quick one — who are you and where are you based?"*

| / Block | Question / label | Type | Required | Airtable field |
|--------|------------------|------|----------|----------------|
| Short text | What's your name? | Short text | Yes | `full_name` |
| Short text or Phone | Best number to reach you? | Phone or Short text | Yes | `mobile` |
| Email | Your email? | Email | Yes | `email` |
| Short text | Which suburb are you in? | Short text | Yes | `suburb` |

---

## Step 2 — Experience & qualifications

**Section / Group (optional)**  
Intro: *"Tell us about your experience."*

| / Block | Question / label | Type | Required | Airtable field |
|--------|------------------|------|----------|----------------|
| Multiple choice | What's your experience level? | Single select | Yes | `experience_level` |

**Options (add each):**
- Apprentice (1st year)
- Apprentice (2nd year)
- Apprentice (3rd year)
- Apprentice (4th year)
- Qualified (1–5 years)
- Qualified (5–10 years)
- Qualified (10+ years)

**— Logic / Branching —**  
Add logic so:
- **If** Experience level **contains** "Apprentice" → show block **6b** (TAFE), **skip** 6a and 6a2.
- **If** Experience level **contains** "Qualified" → show blocks **6a** and **6a2**, **skip** 6b.

| / Block | Question / label | Type | Required | Airtable field |
|--------|------------------|------|----------|----------------|
| Short text **(6a)** | What's your licence type or trade qualification? | Short text | Yes (for Qualified) | `trade_qualifications` |
| File upload **(6a2)** | Upload a photo of your licence or cert (optional) | File upload, 1 file | No | `licence_cert_photo` |
| Short text **(6b)** | Are you enrolled at TAFE? If yes, which year/block? | Short text | No | `tafe_enrolled` |

| / Block | Question / label | Type | Required | Airtable field |
|--------|------------------|------|----------|----------------|
| Multiple choice | When can you work? (Select all that apply) | Multi-select | Yes | `work_availability` |

**Options:** Weekdays | Weekends | Flexible | Full-time

| / Block | Question / label | Type | Required | Airtable field |
|--------|------------------|------|----------|----------------|
| Long text | In a couple of sentences, what kind of work have you done and what are you good at? | Long text / Paragraph | Yes | `experience_description` |

**Placeholder (if Tally allows):** e.g. Framing, bathroom reno, decking, fit-outs…

---

## Step 3 — Work photos & extras

**Section / Group (optional)**  
Intro: *"Last bit — show us your work."*

| / Block | Question / label | Type | Required | Airtable field |
|--------|------------------|------|----------|----------------|
| File upload | Upload photos of your work (up to 10). Job sites, finished work, detail shots. JPEG, PNG or HEIC. | File upload, multiple (max 10) | Yes | `work_photos` |

| / Block | Question / label | Type | Required | Airtable field |
|--------|------------------|------|----------|----------------|
| Multiple choice | How did you hear about us? | Single select | Yes | `how_hear` |

**Options:** Facebook | Instagram | Google | Word of mouth | TAFE | Referred by someone | Other

| / Block | Question / label | Type | Required | Airtable field |
|--------|------------------|------|----------|----------------|
| Short text | Got an ABN? (Optional — for subby work) | Short text | No | `abn` |

| / Block | Question / label | Type | Required | Airtable field |
|--------|------------------|------|----------|----------------|
| Short text | Preferred hourly or day rate? (Optional) | Short text | No | `preferred_rate` |

| / Block | Question / label | Type | Required | Airtable field |
|--------|------------------|------|----------|----------------|
| Yes/No or Checkbox | We'll text you within 48 hours. Okay to get updates via SMS? | Yes/No | — | `sms_opt_in` |

**Default:** Yes

---

## Submit & thank-you screen

- **Submit button label:** "Submit my details" or "Register my interest" (not just "Submit").
- **Thank-you screen:**  
  - Title or first line: e.g. **Thanks, @full_name** (use @ to pull in their name).  
  - Body: *We've got your details. We'll review your submission and be in touch within 48 hours (usually by text).*  
  - Referral line: *Know someone else who'd be a good fit? Send them the link.*  
  - Add a **Share** or **Copy link** button if Tally offers it.

---

## Airtable connection (when you connect Tally → Airtable)

Map Tally fields to these Airtable columns:

| Tally question / variable | → Airtable column |
|---------------------------|-------------------|
| full_name | Full name |
| mobile | Mobile |
| email | Email |
| suburb | Suburb |
| experience_level | Experience level |
| trade_qualifications | Trade qualifications / licence type |
| licence_cert_photo | Licence or cert photo |
| tafe_enrolled | TAFE enrolled (add column in Airtable if missing) |
| work_availability | Work availability |
| experience_description | Experience description |
| work_photos | Work photos |
| how_hear | How did you hear about us |
| abn | ABN |
| preferred_rate | Preferred rate |
| sms_opt_in | SMS opt-in |

---

## Checklist

- [ ] Step 1: Contact & location (4 questions)
- [ ] Step 2: Experience level + logic (Apprentice → 6b, Qualified → 6a + 6a2)
- [ ] Step 2: Work availability (multi-select) + experience description
- [ ] Step 3: Work photos (multi upload) + how hear + ABN + rate + SMS opt-in
- [ ] Submit button copy + thank-you screen with @full_name and referral line
- [ ] Connect to Airtable and map all fields above
