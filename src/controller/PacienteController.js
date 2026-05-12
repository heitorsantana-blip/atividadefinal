import { PacienteModel } from '../model/PacienteModel.js'

export const PacienteController = {
  async cadastrarPaciente(formData) {
    try {
      // Validações simples (Regra de Negócio)
      if (!formData.nome || !formData.email) {
        throw new Error("Nome e E-mail são obrigatórios!")
      }

      // Chama o Model para salvar
      await PacienteModel.criar(formData)
      return { success: true, message: "Paciente cadastrado com sucesso!" }
      
    } catch (error) {
      return { success: false, message: error.message }
    }
  },

  async exibirListagem(req, res) {
    try {
      const pacientes = await PacienteModel.listarTodos();
      res.render('listagem', { pacientes });
    } catch (error) {
      res.status(500).send("Erro ao carregar listagem: " + error.message);
    }
  },

  async exibirListagem(req, res) {
    try {
        const dadosBrutos = await PacienteModel.listarTodos();
        
        // Formata a data de cada paciente para o padrão brasileiro
        const pacientes = dadosBrutos.map(paciente => ({
            ...paciente,
            criado_em: new Date(paciente.criado_em).toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        }));

        res.render('listagem', { pacientes });
    } catch (error) {
        res.status(500).send("Erro ao carregar listagem: " + error.message);
    }
}
}