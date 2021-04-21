import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity('settings')
class Setting {
    @PrimaryColumn()
    id: String;

    @Column()
    username: String;

    @Column()
    chat: String;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Setting }