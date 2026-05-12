import { supabase } from '../config/supabase.js'

export const PacienteModel = {
  async criar(paciente) {
    const { data, error } = await supabase
      .from('pacientes')
      .insert([paciente]) // paciente deve ser { nome, celular, email }
    
    if (error) throw error
    return data
  },

  async listarTodos() {
    const { data, error } = await supabase
      .from('pacientes')
      .select('*')
      .order('criado_em', { ascending: false }); // Mais recentes primeiro
    
    if (error) throw error;
    return data;
  }
}