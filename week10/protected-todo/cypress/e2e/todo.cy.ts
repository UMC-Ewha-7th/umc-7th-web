describe('todo 통합 테스트', () => {
  it('홈 페이지 방문', () => {
    // 1. 메인 페이지 접속
    cy.visit('/');

    // 2. 리스트 로딩 기다리기
    cy.findAllByRole('checkbox').should('have.length', 2);

    // 3. 할 일 추가하기
    cy.findByRole('textbox').as('todoInput');
    cy.get('@todoInput').type('할 일 추가');
    cy.findByRole('button', { name: /입력/ }).click();
    cy.get('@todoInput').should('have.value', '');

    // 4. 체크박스 잘 동작하는지
    cy.findByText('할 일 추가').should('exist').as('todoItem');
    cy.get('@todoItem').click();
    cy.findByLabelText('할 일 추가').should('be.checked');
  })
})