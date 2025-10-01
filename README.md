# Todo App – JS + Node.js

Basit, modern ve sürükle-bırak destekli bir Todo List uygulaması.
Frontend ve backend birlikte çalışır; görevleri ekleyebilir, tamamlayabilir, silebilir ve sürükleyerek sıralayabilirsin.

## ⚡ Özellikler

* Görev ekleme ve silme
* Görevleri tamamlandı olarak işaretleme
* **Yeni görevler en üstte** görünür
* Uzun metinler satır kırma ile düzgün görüntülenir
* **Sürükle-bırak ile sıralama değiştirme**
* Klavye kısayolları:

  * Herhangi bir harfe basınca input’a focus
  * Enter tuşuna basınca görev ekleme
* Modern dark mode tasarım

## 🛠 Teknolojiler

* **Frontend:** HTML, CSS, Vanilla JS
* **Backend:** Node.js + Express
* **Depolama:** JSON dosyası (backend)
* **Kütüphane:** SortableJS (sürükle-bırak)

## 🚀 Kurulum

1. Repo’yu klonla:

```bash
git clone <repo-url>
cd todo-app
```

2. Backend’i kur ve çalıştır:

```bash
cd backend
npm install
node server.js
```

3. Frontend’i çalıştır:

```bash
cd ../frontend
npx live-server
```

4. Tarayıcıda aç:
   `http://127.0.0.1:8080`

---

## 📦 Klasör Yapısı

```
todo-app/
├── backend/
│   ├── server.js
│   └── data/todos.json
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
└── README.md
```

---

## 💡 İleri Geliştirme Fikirleri

* Backend’i MongoDB ile değiştirip kalıcı veri saklama
* Görevleri tarih veya öncelik ile sıralama
* Görevleri kategorilere ayırma
* Mobil uyumlu tasarım ve PWA desteği