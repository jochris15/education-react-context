# React Context

Context menyediakan cara untuk passing data lewat component tree tanpa harus passing props secara manual

[Dokumentasi Hooks Context](https://react.dev/reference/react/hooks#context-hooks)

## React Context vs React Redux
Keduanya bisa dimanfaatkan untuk state management. Jika hanya ingin ngindarin passing props secara manual, kita bisa menggunakan **context** (karena lebih simple), di sisi lain, **redux** lebih powerful dan lebih berguna untuk manage banyak data & request APIs

Perbedaan antara context dan redux ada di cara mereka handle perubahan state
- Context : handle perubahan statenya di level component, terjadinya per component
- Redux : handle perubahan statenya di store central, centralized approach

## Use cases
### Context
- theme preferences (dark mode/light mode)
- preferred language
- current account (gonta ganti akun yang udah login)

[Dokumentasi penggunaan context](https://react.dev/learn/passing-data-deeply-with-context)

### Redux
- Aplikasinya punya banyak data yang dibutuhkan oleh banyak komponen
- Aplikasinya memiliki state yang diupdate secara berkala
- Logic untuk update state aplikasi nya kompleks
