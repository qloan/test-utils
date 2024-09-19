

const statuses = {
    COMPLETE: 'COMPLETE',
    RECEIVED: 'RECEIVED',
    PROCESSING: 'PROCESSING',
    ERROR: 'ERROR',
    UNKNOWN: '__UNKNOWN__',
};

class MockApolloRoutedApplicationsService {
    constructor() {
        this.statusCounter = 0;
        this.statuses = [
            statuses.RECEIVED,
            statuses.PROCESSING,
            statuses.COMPLETE,
        ];
    }

    get nextStatus() {
        if (String(this.id).toUpperCase().includes('ERROR')) {
            return statuses.ERROR;
        }
        return this.statuses[this.statusCounter++ % this.statuses.length];
    }

    get MOCK_ROUTED_APP() {
        // uses routingLoanApplicationId to retrieve loanId from DynamoDB
        return {
            routedApplicationId: this.id,
            applyResponseCode: '',
            clientId: this.id,
            loanId: this.id,
            status: this.nextStatus,
        };
    }

    async getApolloRoutedApplicationById(id) {
        this.id = id;
        return {
            get: () => this.MOCK_ROUTED_APP,
        };
    }
};

module.exports = MockApolloRoutedApplicationsService;
