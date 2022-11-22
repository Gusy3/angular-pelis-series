export class Pelicula{

    constructor(
        public _id: String,
        public title: String,
        public gender: String,
        public year: Number,
        public resolution: String,
        public codec: String,
        public size: Number,
        public synopsis: String,
        public image: String,
        public created_at: Date
    ){}

}