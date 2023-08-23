import { extendTheme } from "@chakra-ui/react"

const colors = {
    brand:{
        300:'#fa8620',
        500:"#FF851B",
        800:'#c25e08',
        900:'#914401'
    },
    app:{
        main:"#191921",
        dark:"#020203",
        hot:"#ff7700",
        secondary:"#ffa200",
        cancel:"#ff3700"
    }
}

const styles = {
    global:{
        body:{
            bg:colors.app.main,
            color:'white',
        }
    }
}

export const theme = extendTheme({
    colors,
    styles
})