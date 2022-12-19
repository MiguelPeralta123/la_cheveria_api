import express from "express"
import pagosRoutes from "./routes/pagos.routes.js"
import enviosRoutes from "./routes/envios.routes.js"
import provRoutes from "./routes/prov.routes.js"
import transporteRoutes from "./routes/transporte.routes.js"
import bancoRoutes from "./routes/banco.routes.js"
import tiendaOnlineRoutes from "./routes/tiendaOnline.routes.js"


const app = express();

app.use(express.json())

app.use(pagosRoutes)
app.use(enviosRoutes)
app.use(provRoutes)
app.use(transporteRoutes)
app.use(bancoRoutes)
app.use(tiendaOnlineRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint no encontrado"
    })
})

export default app