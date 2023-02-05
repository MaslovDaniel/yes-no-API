'use strict'

function debounce(func, wait) {
    let timeout
    return () => {
        const later = (...args) => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}