import PropTypes from 'prop-types'
import { useEffect, useState } from "react"


function useDebounce(value, delay) {

    const [debouned, setDebouned] = useState(value)
    useEffect(() => {
        const handler = setTimeout(() => { setDebouned(value) }, delay)

        return () => clearTimeout(handler);
    }, [value, delay])

    return debouned
}
useDebounce.propTypes = {
    value: PropTypes.string,
    delay: PropTypes.number
}
export default useDebounce