describe('보호 경로 테스트', () => {
    it('로그인을 하지 않은 경우, 보호된 페이지에 접근 시 로그인 페이지로 리다이렉',
        () => {
            cy.visit('/profile');
            cy.url().should('include', '/login');
        }
    );
    it('로그인에 성공한 경우, 메인 페이지로 이동', () => {
        cy.login('Eunie', 'password');
        cy.url().should('include', '/');
        cy.findByRole('link', { name: 'Eunie' }).click();
        cy.url().should('include', '/profile');
    })
})