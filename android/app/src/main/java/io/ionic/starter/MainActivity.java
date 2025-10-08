package io.ionic.starter;  // 👈 deja esto igual, es tu paquete real

import android.content.Intent;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    // 🔹 Captura los enlaces del correo (capacitor://localhost/new)
    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);

        if (intent != null && intent.getData() != null) {
            String dataString = intent.getData().toString();
            System.out.println("📩 Deep link recibido: " + dataString);

            if (dataString.contains("/new")) {
                // 🔹 Si el link contiene "/new", lanza un evento al frontend
                getBridge().triggerWindowJSEvent("supabaseLinkReceived");
            }
        }
    }
}
