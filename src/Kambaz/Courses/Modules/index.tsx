import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListGroup, FormControl } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import {
  setModules,
  deleteModule as deleteModuleAction,
  updateModule as updateModuleAction,
} from "./reducer";
import * as modulesClient from "./client";
import type { ModuleType } from "./reducer";

export default function Modules() {
  const { courseId } = useParams<{ courseId: string }>();
  const dispatch = useDispatch();
  const modules = useSelector(
    (state: RootState) => state.modules.modules
  ) as ModuleType[];
  const [moduleName, setModuleName] = useState("");

  useEffect(() => {
    if (!courseId) return;
    modulesClient
      .findModulesForCourse(courseId)
      .then(mods => dispatch(setModules(mods)))
      .catch(console.error);
  }, [courseId, dispatch]);

  const handleAdd = async () => {
    if (!courseId || !moduleName) return;
    const newMod = await modulesClient.createModuleForCourse(courseId, {
      name: moduleName,
      course: courseId,
    });
    dispatch(setModules([...modules, newMod]));
    setModuleName("");
  };

  const handleRemove = async (id: string) => {
    await modulesClient.deleteModule(id);
    dispatch(deleteModuleAction(id));
  };

  const handleSave = async (m: ModuleType) => {
    const updated = await modulesClient.updateModule(m);
    dispatch(updateModuleAction(updated));
  };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={handleAdd}
      />

      <ListGroup id="wd-modules" className="rounded-0 mt-4">
        {modules.map(m => (
          <ListGroup.Item
            key={m._id}
            className="d-flex align-items-center"
          >
            {m.editing ? (
              <FormControl
                defaultValue={m.name}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    handleSave({
                      ...m,
                      name: (e.target as HTMLInputElement).value,
                      editing: false,
                    });
                  }
                }}
              />
            ) : (
              <span className="me-auto">{m.name}</span>
            )}

            <ModuleControlButtons
              moduleId={m._id}
              deleteModule={() => handleRemove(m._id)}
              editModule={() =>
                dispatch(
                  updateModuleAction({ ...m, editing: true })
                )
              }
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
