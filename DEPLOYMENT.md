# Deployment Guide - Orvedo to AWJ.AI Transition

## 🚀 Deployment Steps

### 1. GitHub'a Yükleme
```bash
git init
git add .
git commit -m "Orvedo to AWJ.AI transition page"
git branch -M main
git remote add origin [your-repo-url]
git push -u origin main
```

### 2. Hosting Seçimi ve Deploy

#### Option A: Netlify (Önerilen)

1. **Netlify'da yeni site oluştur:**
   - https://app.netlify.com/start adresine git
   - GitHub repo'nuzu seç
   - Build settings otomatik algılanacak:
     - Build command: `npm run build`
     - Publish directory: `dist`

2. **Domain ayarları:**
   - Site Settings > Domain Management
   - `orvedo.com` domain'ini ekle
   - Netlify DNS'e geç veya CNAME ayarla
   - SSL sertifikası otomatik oluşturulacak

3. **Redirect'ler otomatik çalışacak:**
   - `netlify.toml` ve `public/_redirects` dosyaları hazır
   - orvedo.com → awj.ai (301 redirect)

#### Option B: Vercel

1. **Vercel'e deploy:**
   - https://vercel.com/new adresine git
   - GitHub repo'nuzu import et
   - Framework preset: Vite algılanacak

2. **Domain ayarları:**
   - Project Settings > Domains
   - `orvedo.com` ekle
   - DNS ayarlarını yap

3. **Redirect'ler otomatik çalışacak:**
   - `vercel.json` dosyası hazır

---

## 🎯 İki Yaklaşım

### Yaklaşım 1: Direkt 301 Redirect (Aktif)
✅ **Şu an aktif olan yapılandırma**

Dosyalar hazır:
- `public/_redirects` (Netlify için)
- `netlify.toml` (Netlify için)
- `vercel.json` (Vercel için)

**Ne olacak:**
- Orvedo.com'a gelen herkes otomatik AWJ.ai'ye yönlendirilir
- SEO değeri korunur (301 = permanent redirect)
- Google PageRank transferi gerçekleşir

**Google için yapmanız gerekenler:**
1. Google Search Console'a her iki domain'i ekleyin
2. "Change of address" tool kullanın (Search Console > Settings > Change of address)
3. Sitemap'i her iki domain'de güncelleyin

---

### Yaklaşım 2: Transition Page Göster

Eğer redirect yerine bu güzel transition page'i göstermek isterseniz:

**Yapmanız gereken:**
1. `public/_redirects` dosyasını silin veya yorum satırı yapın
2. `netlify.toml` içindeki `[[redirects]]` bloklarını silin
3. `vercel.json` içindeki `redirects` array'ini silin

**Ne olacak:**
- Kullanıcılar bu transition page'i görecek
- Manuel olarak "Visit AWJ.AI" butonuna basacaklar
- Daha fazla brand awareness ama SEO transferi yavaş

---

## 📊 Google Search Console Ayarları

### 1. Her İki Domain'i Ekleyin
- https://search.google.com/search-console
- Orvedo.com için property ekle
- AWJ.ai için property ekle

### 2. Site Ownership Doğrulama
Şu meta tag index.html'de hazır:
```html
<meta name="google-site-verification" content="your-verification-code" />
```
Gerçek verification code'unuzu Google'dan alıp ekleyin.

### 3. Change of Address (301 Redirect kullanıyorsanız)
- Search Console > Settings
- Change of address
- Yeni site olarak AWJ.ai'yi seçin
- 301 redirect'i doğrulayın

### 4. Sitemap Gönderin
Her iki domain için:
```
https://orvedo.com/sitemap.xml
https://awj.ai/sitemap.xml
```

---

## 🔍 SEO Checklist

✅ 301 redirect yapılandırıldı (orvedo.com → awj.ai)
✅ Canonical URL ayarlandı
✅ Meta tags (title, description) hazır
✅ Open Graph ve Twitter Cards ayarlandı
✅ Structured Data (Organization + WebSite) eklendi
✅ Sitemap.xml oluşturuldu
✅ Robots.txt yapılandırıldı
✅ SSL/HTTPS (hosting provider tarafından otomatik)

---

## ⚡ Önerilen Yaklaşım

**EN İYİ SEÇİM:** Yaklaşım 1 (301 Redirect)

**Neden?**
- SEO değerini tam olarak korur
- Google PageRank transferi hızlı olur
- Kullanıcı deneyimi kesintisiz
- Backlink değerleri transfer edilir

**Timeline:**
- İlk 24 saat: Hosting'de değişiklikler aktif olur
- 1-2 hafta: Google yeni redirect'leri indexler
- 2-4 hafta: PageRank ve SEO değeri transfer başlar
- 2-3 ay: Tam SEO transferi tamamlanır

---

## 🔧 Troubleshooting

### Redirect çalışmıyor?
1. DNS ayarlarının propagate olması için 24-48 saat bekleyin
2. Netlify/Vercel deploy loglarını kontrol edin
3. Browser cache'i temizleyin (Ctrl+Shift+R)

### SSL hatası?
1. Domain'in SSL sertifikası için 24 saat bekleyin
2. Netlify/Vercel'de "Force HTTPS" aktif olmalı

### Google indexlemiyor?
1. Search Console'da "Request Indexing" yapın
2. Sitemap gönderin
3. Internal linking ekleyin (AWJ.ai'den orvedo.com'a link)

---

## 📞 Destek

Sorularınız için: info@orvedo.com
