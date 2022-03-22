export function signIn(){
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            token: 'sdhasjdieidjmaisjdoahdfioeifnsd9124',
            user: {
                name: 'Julio',
                email: 'julio@gmail.com'
            }
        });
    }, 1000);
  });
} 