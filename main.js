(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.createElement("INPUT"),
		bntAñadirTarea = document.getElementById("añadirTarea"),
		botonAceptar = document.createElement("INPUT"),
		botonCancelar = document.createElement("INPUT"),
        areaSuperior = document.getElementById("areaSuperior");
 
	// Funciones

    var añadirTarea = function(){
        var saltoDeLinea2 = document.createElement("br");

		saltoDeLinea2.id = "saltoDeLinea2";
		
        tareaInput.id = "input-text-superior";
		tareaInput.setAttribute("type", "text");
		tareaInput.setAttribute("name", "nombre");
        tareaInput.setAttribute("placeholder", "Introduce el nombre");
        
		botonAceptar.innerHTML = "Guardar";
		botonAceptar.setAttribute("type", "submit");
		botonAceptar.setAttribute("name", "guardar");
		botonAceptar.setAttribute("value","Guardar");
        botonAceptar.id = "btn-aceptar-superior";

		botonCancelar.innerHTML = "Cancelar";
		botonCancelar.setAttribute("type", "submit");
		botonCancelar.setAttribute("name", "cancelar");
		botonCancelar.setAttribute("value", "Cancelar");
        botonCancelar.id = "btn-cancelar-superior";

        areaSuperior.appendChild(tareaInput);
        areaSuperior.appendChild(saltoDeLinea2);
        areaSuperior.appendChild(botonAceptar);
        areaSuperior.appendChild(botonCancelar);
		
    }
 
	var agregarTarea = function(){
		var tareaInput2 = document.getElementById("input-text-superior"),
			btn1s = document.getElementById("btn-aceptar-superior"),
			btn2s = document.getElementById("btn-cancelar-superior"),
			sl2s = document.getElementById("saltoDeLinea2"),
			tarea2 = tareaInput.value,
			nuevaTarea2 = document.createElement("li"),
			boton2 = document.createElement("INPUT");
            
 
		if (tarea2 === "") {
			tareaInput2.setAttribute("placeholder", "Agrega una tarea valida");
			return false;
		}

		var numeroTareaActual = localStorage.getItem("numTareas");
		var numeroTareaActualInt = parseInt(numeroTareaActual);
		numeroTareaActualInt = numeroTareaActualInt + 1;
 
		//Ponemos el id y el name del li para luego hacer la modificacion
		nuevaTarea2.id = "li-" + tareaInput2.value;
		nuevaTarea2.setAttribute("name", tareaInput2.value);
		// Agregamos el contenido al boton
		boton2.innerHTML= tareaInput2.value;
		boton2.setAttribute("type", "submit");
		boton2.setAttribute("name", tareaInput2.value);
		boton2.setAttribute("value",tareaInput2.value);
		boton2.setAttribute("placeholder", numeroTareaActualInt);
		boton2.id = "btn-"+ numeroTareaActualInt + "-" + tareaInput2.value;

		
		// Agrergamos el boton (button) a la nueva tarea (li)
		nuevaTarea2.appendChild(boton2);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea2);

		localStorage.setItem(numeroTareaActualInt, tareaInput2.value);
		localStorage.setItem("numTareas", numeroTareaActualInt);


		boton2.addEventListener("click",function(){modificarTarea(boton2.getAttribute("placeholder"), boton2.getAttribute("name"))});

		tareaInput2.value = "";
		tareaInput2.setAttribute("placeholder", "");
 
		areaSuperior.removeChild(tareaInput2);
		areaSuperior.removeChild(btn1s);
		areaSuperior.removeChild(btn2s);
		areaSuperior.removeChild(sl2s);
		
	}

	var cancelarSuperior = function(){
		var et1 = document.getElementById("input-text-superior"),
			sl2 = document.getElementById("saltoDeLinea2"),
			btn1 = document.getElementById("btn-aceptar-superior"),
			btn2 = document.getElementById("btn-cancelar-superior");

		areaSuperior.removeChild(et1);
		areaSuperior.removeChild(btn1);
		areaSuperior.removeChild(btn2);
		areaSuperior.removeChild(sl2);

	}

	var modificarTarea = function(placeHolderBotonPulsado2 ,botonPulsado2){
		
		var elementoLista = document.getElementById("li-" + botonPulsado2),
			botonPulsado3 = document.getElementById("btn-"+ placeHolderBotonPulsado2 + "-" + botonPulsado2),
			saltoDeLinea1Mod = document.createElement("br"),
			saltoDeLinea2Mod = document.createElement("br"),
			saltoDeLinea3Mod = document.createElement("br"),
			editTarea3 = document.createElement("INPUT"),
			boton1mod = document.createElement("INPUT"),
			boton2mod = document.createElement("INPUT"),
			boton3mod = document.createElement("INPUT");


		editTarea3.id = "input-text-" + botonPulsado2;
		editTarea3.setAttribute("type", "text");
		editTarea3.setAttribute("name", "nombre");
		editTarea3.value = botonPulsado2;
		editTarea3.setAttribute("placeholder", botonPulsado2);
		
		
		var idTareaMod = botonPulsado3.getAttribute("placeholder");

		boton1mod.innerHTML = "Guardar";
		boton1mod.setAttribute("type", "submit");
		boton1mod.setAttribute("name", "guardar");
		boton1mod.setAttribute("value","Guardar");
		boton1mod.setAttribute("placeholder", idTareaMod);
		boton1mod.id = "btn-aceptar-" + botonPulsado2;
		boton1mod.addEventListener("click", function(){guardarInferior(botonPulsado2)});

		boton2mod.innerHTML = "Cancelar";
		boton2mod.setAttribute("type", "submit");
		boton2mod.setAttribute("name","cancelar");
		boton2mod.setAttribute("value","Cancelar");
		boton2mod.setAttribute("placeholder", idTareaMod);
		boton2mod.id = "btn-cancelar-" + botonPulsado2;
		boton2mod.addEventListener("click", function(){cancelarInferior(botonPulsado2)});
		
		boton3mod.innerHTML = "Eliminar";
		boton3mod.setAttribute("type", "submit");
		boton3mod.setAttribute("name", "eliminar");
		boton3mod.setAttribute("value", "Eliminar");
		boton3mod.setAttribute("placeholder", idTareaMod);
		boton3mod.id = "btn-eliminar-" + botonPulsado2;
		boton3mod.addEventListener("click" , function(){eliminarInferior(botonPulsado2)});

		elementoLista.appendChild(saltoDeLinea1Mod);
		elementoLista.appendChild(editTarea3);
		elementoLista.appendChild(saltoDeLinea2Mod);
		elementoLista.appendChild(boton3mod);
		elementoLista.appendChild(boton2mod);
		elementoLista.appendChild(boton1mod);
		elementoLista.appendChild(saltoDeLinea3Mod);
		elementoLista.removeChild(botonPulsado3);

	}

	var eliminarInferior = function(nombre){
		var ete = document.getElementById("input-text-" + nombre),
			bte1 = document.getElementById("btn-aceptar-" + nombre),
			bte2 = document.getElementById("btn-cancelar-" + nombre),
			bte3 = document.getElementById("btn-eliminar-" + nombre),
			lie = document.getElementById("li-" + nombre);

			var idEliminar = bte3.getAttribute("placeholder");
			localStorage.removeItem(idEliminar);

			lie.remove(ete);
			lie.remove(bte1);
			lie.remove(bte2);
			lie.remove(bte3);

	}

	var cancelarInferior = function(nombre){
		var etc = document.getElementById("input-text-" + nombre),
			btc1 = document.getElementById("btn-aceptar-" + nombre),
			btc2 = document.getElementById("btn-cancelar-" + nombre),
			btc3 = document.getElementById("btn-eliminar-" + nombre),
			liec = document.getElementById("li-" + nombre),
			lic = document.createElement("li"),
			btcn = document.createElement("INPUT");

		lic.id = "li-" + nombre;
		lic.setAttribute("name", nombre);
		
		var idBotonC = btc2.getAttribute("placeholder");

		btcn.innerHTML= nombre;
		btcn.setAttribute("type", "submit");
		btcn.setAttribute("name", nombre);
		btcn.setAttribute("value",nombre);
		btcn.setAttribute("placeholder",idBotonC);
		btcn.id = "btn-" + idBotonC + "-" + nombre;

			liec.remove(etc);
			liec.remove(btc1);
			liec.remove(btc2);
			liec.remove(btc3);
			lic.appendChild(btcn);
			lista.appendChild(lic);

			btcn.addEventListener("click",function(){modificarTarea(btcn.getAttribute("placeholder") ,btcn.getAttribute("name"))});

	}

	var guardarInferior = function(nombre){
		
		var etg = document.getElementById("input-text-" + nombre),
			btg1 = document.getElementById("btn-aceptar-" + nombre),
			btg2 = document.getElementById("btn-cancelar-" + nombre),
			btg3 = document.getElementById("btn-eliminar-" + nombre),
			lieg = document.getElementById("li-" + nombre),
			lig = document.createElement("li"),
			btgn = document.createElement("INPUT");

		lig.id = "li-" + etg.value;
		lig.setAttribute("name", etg.value);

		var idBoton = btg1.getAttribute("placeholder");

		btgn.innerHTML= etg.value;
		btgn.setAttribute("type", "submit");
		btgn.setAttribute("name", etg.value);
		btgn.setAttribute("value", etg.value);
		btgn.setAttribute("placeHolder",idBoton);
		btgn.id = "btn-" + idBoton + "-" + etg.value;

		localStorage.setItem(idBoton, etg.value);

			lieg.remove(etg);
			lieg.remove(btg1);
			lieg.remove(btg2);
			lieg.remove(btg3);
			lig.appendChild(btgn);
			lista.appendChild(lig);

			btgn.addEventListener("click",function(){modificarTarea(btgn.getAttribute("placeholder") ,btgn.getAttribute("name"))});

	}

	var cargarTareas = function(){

		if(localStorage.getItem("numTareas")=== null){
			localStorage.setItem("numTareas", 0);
		}else if(localStorage.getItem("numTareas")>0){
			var numTareasACargar = localStorage.getItem("numTareas");

			for(var i = 1; i <= numTareasACargar; i++){
				var lic = document.createElement("li"),
					btnc = document.createElement("INPUT");

					var nombreTarea = localStorage.getItem(i);

					if(nombreTarea !== null){
						lic.id = "li-" + nombreTarea;
						lic.setAttribute("name", nombreTarea);

						btnc.innerHTML= nombreTarea;
						btnc.setAttribute("type", "submit");
						btnc.setAttribute("name", nombreTarea);
						btnc.setAttribute("value", nombreTarea);
						btnc.setAttribute("placeHolder",i);
						btnc.id = "btn-" + i + "-" + nombreTarea;
						
						
						lic.appendChild(btnc);
						lista.appendChild(lic);

						addListener(btnc.id);
					}

					
			}
		}
	}

	var addListener = function(idBotonListener){
		var botonListener = document.getElementById(idBotonListener);

		botonListener.addEventListener("click",function(){modificarTarea(botonListener.getAttribute("placeholder"), botonListener.getAttribute("name"))});
	}

	// Eventos
 
	//Cargar tareas previas
	window.addEventListener("load", cargarTareas);
	
	// Comprobar Input
    //tareaInput.addEventListener("click", comprobarInput);
    
    //Añadir tarea
	bntAñadirTarea.addEventListener("click", añadirTarea);
	
	// Agregar Tarea
	botonAceptar.addEventListener("click", agregarTarea);

	//cancelar tarea superior
	botonCancelar.addEventListener("click", cancelarSuperior);
	
}());