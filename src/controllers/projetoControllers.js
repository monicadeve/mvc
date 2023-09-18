import projetos from "../models/projetos";

class ProjetoController {

    static getAllprojetos = (req, res) => {
        projetos.find((err, projetos) => {
            res.status(200).json(projetos)
        })
    }

    static createProjetos = (req, res) => {
        let projeto = new projetos(req.body);

        projeto.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar pessoa doadoara`})
            } else {
                res.status(201).send(projeto.toJSON())
            }
            })
        }
    }
  
export default ProjetoController;
