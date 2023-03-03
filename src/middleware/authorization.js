import User from "../DAO/User.js"

/**
 * Verifica se uma request foi feita por um token válido de usuário
 *
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */
export const verificarToken = async (request, response, next) => {
    const token = request.headers['x-auth-token']
    if (!token) {
        response.status(401).send({
            success: false,
            message: 'Token não informado!'
        })
        return
    }
    const user = await User.findByProperty('authToken', token)
    if (!user) {
        response.status(401).send({
            success: false,
            message: 'Não autorizado!'
        })
        return
    }
    next()
}