import react from "react";
import {
    Text,
    View,
} from 'react-native';

const CompanyData = () => {
    return (
      <View >
        <Text style={{fontSize: 25, textAlign: 'center'}}> Company Data   </Text>
        <Text style={{fontSize: 15, textAlign: 'center'}}> Company Name : Tanzeel Motors  </Text>
        <Text style={{fontSize: 15, textAlign: 'center'}}> No. of Emp : 1000  </Text>
        <Text style={{fontSize: 15, textAlign: 'center'}}> Product : Motor bikes  </Text>
        </View>
    );
    };

    export default CompanyData;