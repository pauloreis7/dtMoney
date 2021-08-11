import { Container } from "../Summary/styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>X-team</td>
            <td className="deposit">R$12.000</td>
            <td>Trabalho principal</td>
            <td>15/11/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$12.000</td>
            <td>Trabalho principal</td>
            <td>15/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}