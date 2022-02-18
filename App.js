import { StatusBar } from 'expo-status-bar';
import ExpoUpdate from 'expo-updates';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text } from 'react-native';
import Input from './src/components/input';
import Response from './src/components/response';
import { maskCurrency } from './src/utils/formatPrice';

export default function App() {

  const [totalCotas, setTotalCotas] = useState('');
  const [cotacaoAtual, setCotacaoAtual] = useState('');
  const [dividendo, setDividendo] = useState('');
  const [quantidade, setQuantidade] = useState('');

  useEffect(() => {
    (async () => {
      const { isAvailable } = await ExpoUpdate.checkForUpdateAsync();
      if (isAvailable) {
        await ExpoUpdate.fetchUpdateAsync();
        await ExpoUpdate.reloadAsync()
      }
    }) ()
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.containerScroll}>
        <Text style={styles.title}> Cálculo de rendimentos </Text>
        <Input
          onChangeText={e => setTotalCotas(e)}
          value={totalCotas}
          placeHolder="Digite o total de suas cotas"
          title="Total de cotas"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Input
          onChangeText={e => setCotacaoAtual(e)}
          value={maskCurrency(cotacaoAtual)}
          placeHolder="Digite a cotação atual"
          title="Cotação atual"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Input
          onChangeText={e => setDividendo(e)}
          value={maskCurrency(dividendo)}
          placeHolder="Digite o preço de dividendo"
          title="Total dividendo"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Input
          onChangeText={e => setQuantidade(e)}
          value={quantidade}
          placeHolder="Digite quanto quer comprar"
          title="Quanto comprar"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Response
          cotacao={cotacaoAtual}
          cotas={totalCotas}
          dividendo={dividendo}
          quantidade={quantidade}
          />
        <StatusBar style="auto" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScroll: {
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginTop: "40%",
    marginBottom: '20%',
  },
});
