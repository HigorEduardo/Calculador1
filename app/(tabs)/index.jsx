import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet} from 'react-native';

const Santoandre = () => {
  
  const [saldo, setSaldo] = useState(7320.92);
  const [valor, setValor] = useState('');

  const deposito = () => {
    const valorNumerico = parseFloat(valor);
    if (!isNaN(valorNumerico) && valorNumerico > 0) {
      const novoSaldo = saldo + valorNumerico + valorNumerico * 0.01; 
      setSaldo(novoSaldo);
      setValor('');
    }
  };

  const sacar = () => {
    const valorNumerico = parseFloat(valor);
    if (!isNaN(valorNumerico) && valorNumerico > 0) {
      const taxa = saldo * 0.025; 
      const novoSaldo = saldo - valorNumerico - taxa;
      if (novoSaldo >= 0) {
        setSaldo(novoSaldo);
        setValor(''); 
      } else {
        alert('Ta pobre?');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.saldoContainer}>
        <Text style={styles.label}>Saldo Atual</Text>
        <Text style={styles.valor}>R$ {saldo.toFixed(2)}</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="Valor" value={valor} onChangeText={setValor}/>
        <Pressable style={styles.button} onPress={deposito}>
          <Text style={styles.buttonText}>Depositar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={sacar}>
          <Text style={styles.buttonText}>Sacar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
  valorContainer: {
    
  },
  label: {
    
  },
  valor: {
    
  },
  formContainer: {
   
  },
  input: {
  
  },
  button: {
   
  },
  buttonText: {
    
  },
});

export default Santoandre;
