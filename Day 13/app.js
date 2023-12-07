//maintaine state, localstroage, session stroage, cookies, security, query string

// http is state less

// .NET View state, cookies, query string, session and cross form control

// React Redux, recoil

// ANgular service, ngrx 


class Storage {

    getItem(key) {
        localStorage.getItem(key)
    }

    setItem(key, value) {
        localStorage.setItem(key, value)
    }

    removeItem(key) {
        localStorage.removeItem(key)
    }

    clear() {
        localStorage.clear()
    }
}