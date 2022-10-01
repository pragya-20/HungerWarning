https://reactnative.dev/docs/keyboard
https://reactnative.dev/docs/keyboardavoidingview#behavior
https://reactnative.dev/docs/0.62/textinput
https://reactnative.dev/docs/flexbox#justify-content
https://reactnative.dev/docs/handling-touches

Update the codebase for the is active button using borderBottomWidth
flexGrow

<View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderColor: 'green',
                width: '100%',
              }}>
              <Icon
                name="accessibility-outline"
                onPress={() => {
                  console.log('Icon clicked');
                }}
              />
              <Icon
                name="rowing"
                onPress={() => {
                  console.log('Icon clicked');
                }}
              />
              <Icon
                name="rowing"
                onPress={() => {
                  console.log('Icon clicked');
                }}
              />
              <Icon
                name="rowing"
                onPress={() => {
                  console.log('Icon clicked');
                }}
              />
            </View>
          );
        },
      }}>