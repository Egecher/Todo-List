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
git clone https://github.com/Egecher/Todo-List.git
cd todo-app
```

2. Backend’i kur:

```bash
npm install
```

3. Çalıştır:
    [Başlatıcı](starter.bat)'ya basarak projeyi kaldırın.

4. Tarayıcıda aç:
   `http://127.0.0.1:5000/`

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
└── LICENSE
└── README.md
└── starter.bat
```

---

## 💡 İleri Geliştirme Fikirleri

* Backend’i MongoDB ile değiştirip kalıcı veri saklama
* Görevleri tarih veya öncelik ile sıralama
* Görevleri kategorilere ayırma
* Mobil uyumlu tasarım ve PWA desteği

## License

Bu proje MIT Lisansı kapsamında lisanslanmıştır. Ayrıntılar için [LICENSE](./LICENSE) dosyasına bakın.