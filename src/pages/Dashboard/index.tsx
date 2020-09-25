import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/1103275?s=400&u=3405a706d1d437c940d7b17fd7b7e2628035de5c&v=4"
            alt="Glauter Santos"
          />
          <div>
            <strong>glauterlima/unform</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/1103275?s=400&u=3405a706d1d437c940d7b17fd7b7e2628035de5c&v=4"
            alt="Glauter Santos"
          />
          <div>
            <strong>glauterlima/unform</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/1103275?s=400&u=3405a706d1d437c940d7b17fd7b7e2628035de5c&v=4"
            alt="Glauter Santos"
          />
          <div>
            <strong>glauterlima/unform</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
