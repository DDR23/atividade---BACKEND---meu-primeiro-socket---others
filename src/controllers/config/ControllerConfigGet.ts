import { Socket } from "socket.io";
import { Types } from "mongoose";
import Config from '../../models/ModelConfig';

export default async function ControllerConfigGet(socket: Socket, id: Types.ObjectId) {
  try {
    const config = await Config.findById(id);
    socket.emit('CONFIG_GET_RES', {
      title: 'Sucesso',
      message: 'A configuração foi enviadas.',
      data: config
    });
  } catch (error) {
    socket.emit('CONFIG_GET_RES', {
      title: 'Erro',
      message: (error as Error).message || 'A ação não pode ser finalizada.',
    });
  }
}
