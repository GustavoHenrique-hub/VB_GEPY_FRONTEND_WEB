import "./style.css";
import Logo from "../../assets/logged-icon.png";
import Chevron from "../../assets/chevron-right.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePictureUploader from "../profile-image";
import {
  House,
  User,
  Users,
  BriefcaseBusiness,
  NotebookTabs,
  Newspaper,
  LogOut,
  LockKeyhole,
} from "lucide-react";

export default function Sidebar() {
  const [alunosOpen, setAlunosOpen] = useState(false);
  const [funcionariosOpen, setFuncionariosOpen] = useState(false);
  const [turmasOpen, setTurmasOpen] = useState(false);

  const handleAlunosClick = () => {
    if (turmasOpen) {
      setTurmasOpen(alunosOpen);
    }
    if (funcionariosOpen) {
      setFuncionariosOpen(alunosOpen);
    }
    setAlunosOpen(!alunosOpen);
  };

  const handleFuncionariosClick = () => {
    if (alunosOpen) {
      setAlunosOpen(funcionariosOpen);
    }
    if (turmasOpen) {
      setTurmasOpen(funcionariosOpen);
    }
    setFuncionariosOpen(!funcionariosOpen);
  };

  const handleTurmasClick = () => {
    if (alunosOpen) {
      setAlunosOpen(turmasOpen);
    }
    if (funcionariosOpen) {
      setFuncionariosOpen(turmasOpen);
    }
    setTurmasOpen(!turmasOpen);
  };

  return (
    <div className="sidebar-parent">
      <div className="logged-user">
        <ProfilePictureUploader />
        <p>Diretora Xaxa</p>
      </div>
    <div className="sidebar-expand">
       <div className="sidebar-item">
          <Link to="/" className="sidebar-title">
            <House size={20} color="#6700B3" strokeWidth={2} />
            <p>Início</p>
          </Link>
        </div>
        <div className="sidebar-item">
          <div
            className={alunosOpen ? "sidebar-title opened" : "sidebar-title"}
            onClick={handleAlunosClick}
          >
            <User size={20} color="#6700B3" strokeWidth={2} />
            <p>Alunos</p>
            <img className="toggle-btn" src={Chevron} alt="" />
          </div>
          <div className={alunosOpen ? "sub-area opened" : "sub-area"}>
            <div>
              <Link to="/cadastro-alunos" className="sidebar-item-sub">
                <p>Cadastro</p>
              </Link>
              <Link to="/busca-alunos" className="sidebar-item-sub">
                <p>Busca</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="sidebar-item">
          <div
            className={
              funcionariosOpen ? "sidebar-title opened" : "sidebar-title"
            }
            onClick={handleFuncionariosClick}
          >
            <BriefcaseBusiness size={20} color="#6700B3" strokeWidth={2} />
            <p>Funcionários</p>
            <img className="toggle-btn" src={Chevron} alt="" />
          </div>
          <div className={funcionariosOpen ? "sub-area opened" : "sub-area"}>
            <div>
              <Link to="/cadastro-funcionarios" className="sidebar-item-sub">
                <p>Cadastro</p>
              </Link>
              <Link to="/busca-funcionarios" className="sidebar-item-sub">
                <p>Busca</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="sidebar-item">
          <div
            className={turmasOpen ? "sidebar-title opened" : "sidebar-title"}
            onClick={handleTurmasClick}
          >
            <Users size={20} color="#6700B3" strokeWidth={2} />
            <p>Turmas</p>
            <img className="toggle-btn" src={Chevron} alt="" />
          </div>
          <div className={turmasOpen ? "sub-area opened" : "sub-area"}>
            <div>
              <Link to="/cadastro-turmas" className="sidebar-item-sub">
                <p>Cadastro</p>
              </Link>
              <Link to="/busca-turmas" className="sidebar-item-sub">
                <p>Busca</p>
              </Link>
              
              <Link to="/boletim" className="sidebar-item-sub">
                <p>Boletim</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="sidebar-item">
          <Link to="/agenda" className="sidebar-title">
            <NotebookTabs size={20} color="#6700B3" strokeWidth={2} />
            <p>Recados</p>
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="/newsletter" className="sidebar-title">
            <Newspaper size={20} color="#6700B3" strokeWidth={2} />
            <p>Newsletter</p>
          </Link>
        </div>
      </div>
      
    
    <div className="sidebar-buttons">
        <Link to="/login" className="link-login">
        <LogOut size={20} color="#6700B3" strokeWidth={2} />
          <button className="button-logout-sidebar">
            
            Sair
          </button>
        </Link>
        <Link to="/" className="link-login">
        <LockKeyhole size={20} color="#6700B3" strokeWidth={2} />
        <button className="button-changepassword-sidebar">
          
          Mudar senha
        </button>
        </Link>
      </div>
    </div>
  );
}
