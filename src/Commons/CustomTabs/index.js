import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => handleTabPress('Tab1')}
          style={{
            backgroundColor: activeTab === 'Tab1' ? 'green' : 'gray',
            padding: 10,
          }}>
          <Text style={{color: 'white'}}>Tab 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('Tab2')}
          style={{
            backgroundColor: activeTab === 'Tab2' ? 'blue' : 'gray',
            padding: 10,
          }}>
          <Text style={{color: 'white'}}>Tab 2</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {activeTab === 'Tab1' && <Text>Screen 1</Text>}
        {activeTab === 'Tab2' && <Text>Screen 2</Text>}
      </View>
    </View>
  );
};

export default TabsComponent;
// ----------------------------------------------
// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';

// const TabsComponent = () => {
//   const [activeTab, setActiveTab] = useState('Tab1');

//   return (
//     <View style={{flex: 1}}>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-around',
//           padding: 10,
//         }}>
//         <TouchableOpacity
//           onPress={() => setActiveTab('Tab1')}
//           style={{
//             backgroundColor: activeTab === 'Tab1' ? 'green' : 'gray',
//             padding: 10,
//           }}>
//           <Text style={{color: 'white'}}>Tab 1</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => setActiveTab('Tab2')}
//           style={{
//             backgroundColor: activeTab === 'Tab2' ? 'blue' : 'gray',
//             padding: 10,
//           }}>
//           <Text style={{color: 'white'}}>Tab 2</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         {activeTab === 'Tab1' && (
//           <View>
//             <Text>Screen 1</Text>
//             {/* Additional content for Screen 1 */}
//           </View>
//         )}
//         {activeTab === 'Tab2' && (
//           <View>
//             <Text>Screen 2</Text>
//             {/* Additional content for Screen 2 */}
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// export default TabsComponent;
