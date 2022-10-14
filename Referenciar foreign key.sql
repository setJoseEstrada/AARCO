

select Modelo.Modelo,Submarcas.Submarca  from Modelo inner join Submarcas on Modelo.idSubMarca = Submarcas.id 

select * from Submarcas
select * from Modelo
select * from Descripcion


alter table Descripcion

add constraint 
idModelo  foreign key(idModelo)  references Modelo(id)


ALTER TABLE Submarcas
DROP  CONSTRAINt FKY_id 



