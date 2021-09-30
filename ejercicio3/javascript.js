window.onload = function () {
            var localStorageKeyName = 'data';

            cargarLocalStorage();

            document.querySelector("#btn-add").addEventListener('click', function () {
                var name = document.getElementById("name"),
                    nit = document.getElementById("nit"),
                    direccion = document.getElementById("direccion"),
                    fecha = document.getElementById("fecha")
                
                if (name.value.length === 0 || direccion.value.length === 0 || !parseInt(nit.value) || fecha.value.length === 0) return;

                var empresa = {
                    name: name.value,
                    nit: nit.value,
                    direccion: direccion.value ,
                    fecha: fecha.value
                };

                name.value = '';
                nit.value = '';
                direccion.value = '';
                fecha.value = '';

                addEmpresa(empresa);
            })

            function addEmpresa(obj) {
                var empresas = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                if (dataInLocalStorage !== null) {
                    empresas = JSON.parse(dataInLocalStorage);
                }

                empresas.push(obj);
                localStorage.setItem(localStorageKeyName, JSON.stringify(empresas));
                cargarLocalStorage();
            }

            function cargarLocalStorage() {
                var empresas = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName),
                    gridBody = document.querySelector("#grid tbody");

                if (dataInLocalStorage !== null) {
                    empresas = JSON.parse(dataInLocalStorage);
                }

                gridBody.innerHTML = '';

                empresas.forEach(function (x, i) {
                    var tr = document.createElement("tr"),
                        tdName = document.createElement("td"),
                        tdNit = document.createElement("td"),
                        tdDireccion = document.createElement("td"),
                        tdFecha = document.createElement("td")
                        
                        tdRemove = document.createElement("td"),
                        btnRemove = document.createElement("button");

                    tdName.innerHTML = x.name;
                    tdNit.innerHTML = x.nit;
                    tdDireccion.innerHTML = x.direccion;
                    tdFecha.innerHTML = x.fecha;
                   
                    btnRemove.textContent = 'Delete';
                    btnRemove.className = 'btn btn-xs btn-danger';
                    btnRemove.addEventListener('click', function(){
                        deleteEmpresa(i);
                    });

                    tdRemove.appendChild(btnRemove);

                    tr.appendChild(tdName);
                    tr.appendChild(tdNit);
                    tr.appendChild(tdDireccion);
                    tr.appendChild(tdFecha);
               
                    tr.appendChild(tdRemove);

                    gridBody.appendChild(tr);
                });
            }

            function deleteEmpresa(index){
                var empresas = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                empresas = JSON.parse(dataInLocalStorage);

                empresas.splice(index, 1);

                localStorage.setItem(localStorageKeyName, JSON.stringify(empresas));

                cargarLocalStorage();
            }
        }
    