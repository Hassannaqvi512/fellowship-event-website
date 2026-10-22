const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, "data");
const APPLICATIONS_FILE = path.join(DATA_DIR, "applications.json");

fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(APPLICATIONS_FILE)) {
  fs.writeFileSync(APPLICATIONS_FILE, "[]", "utf8");
}

app.use(express.json({ limit: "30kb" }));
app.use(express.static(path.join(__dirname, "public")));

function readApplications() {
  try {
    return JSON.parse(fs.readFileSync(APPLICATIONS_FILE, "utf8"));
  } catch {
    return [];
  }
}

app.post("/api/applications", (req, res) => {
  const { fullName, email, country, interest, motivation } = req.body || {};

  if (
    typeof fullName !== "string" || fullName.trim().length < 2 ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    typeof country !== "string" || country.trim().length < 2 ||
    typeof interest !== "string" || interest.trim().length < 2
  ) {
    return res.status(400).json({
      ok: false,
      message: "براہِ کرم نام، درست ای میل، ملک اور پروگرام کی معلومات مکمل کریں۔"
    });
  }

  const applications = readApplications();
  const application = {
    id: `APP-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
    fullName: fullName.trim().slice(0, 100),
    email: email.trim().slice(0, 150),
    country: country.trim().slice(0, 100),
    interest: interest.trim().slice(0, 100),
    motivation: typeof motivation === "string" ? motivation.trim().slice(0, 2000) : "",
    submittedAt: new Date().toISOString()
  };

  applications.push(application);
  fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(applications, null, 2), "utf8");

  return res.status(201).json({
    ok: true,
    message: "آپ کی درخواست موصول ہو گئی ہے۔ یہ ڈیمو تصدیق ہے؛ براہِ کرم اصل ویب سائٹ شائع کرنے سے پہلے ای میل/ایڈمن نوٹیفکیشن شامل کریں۔",
    applicationId: application.id
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "Fellowship Event Website API" });
});

app.listen(PORT, () => {
  console.log(`Website running at http://localhost:${PORT}`);
});
