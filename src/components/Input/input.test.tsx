import { render, screen } from '@testing-library/react-native';

import { Input } from "@components/Input";

describe('Component: Input', () => {
    it('should be render without activity indicator', () => {
        render(<Input/>);
        const { debug } = render(<Input />);
        //debug(); // ver o que está sendo renderizado
        const activityIndicator = screen.queryByTestId('activity-indicator'); 
        /**
         * indicado para quando pode ser que não seja renderizado
         * e precisa confirmar que ele não existe
         */
        //console.log(activityIndicator);

        expect(activityIndicator).toBeNull(); // não deve existir
    })

    it('should be render with activety if isLoading is true', () => {
        render(<Input isLoading />);
        const activityIndicator = screen.getByTestId('activity-indicator');
        expect(activityIndicator).toBeTruthy(); // deve existir
    })
})