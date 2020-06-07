import { User } from './user'
import { Replypost } from './replypost'

export class replyreport {
    id:number
    title:string
    description:string
    sender:User
    addtime:Date
    reply: Replypost
   state :string
}
